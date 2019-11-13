import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../services/serviceRest';

@Component({
  selector: 'app-cd-computo',
  templateUrl: './cd-computo.component.html',
})
export class CdComputoComponent implements OnInit {


  public listaArticulos: any = null;

  constructor(private productoService : ProductoService) { }

  ngOnInit() {

    // this.listaArticulos= this.productoService.getProductos();


    // this.listaArticulos= this.productoService.getProductos();
    this.productoService.getProductos().subscribe((data: any[])=>{
      console.log(data);
      this.listaArticulos = data;
    })  
      // this.listaArticulos = data;
    


    console.log(this.listaArticulos);

  }



  };




//   this.productoService.getProductos().subscribe(
//     result => {
         
//         if(result.code != 200){
//             console.log(result);
//         }else{
//             this.productos = result.data;
//         }

//     },
//     error => {
//         console.log(<any>error);
//     }
// );


