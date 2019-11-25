import { Producto } from './../model/producto';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from './../service/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: []
})
export class CarritoComponent implements OnInit {

  private carrito: Array<Producto> = [];
  private subscription: Subscription;
  private total: number;
  private productos: Array<any> = [];
  private producto: any;


  constructor(private carritoService: CarritoService) { 
  
    for (let i = 0; i < 20; i++) { // Creamos un conjunto de 20 productos de prueba
      const producto = new Producto();
      producto.codigo = (i + 1);
      producto.titulo = `Producto ${i}`;
      producto.descripcion = 'Lorem ipsum dolor sit amet...';
      producto.precio = i * 10 + 100;
      producto.fabricante = `Fabricante Tkeno-${i}`;
      producto.novedad = (i < 6); // Marcamos como novedad los 6 primeros
      this.productos.push(producto);
    }


  }

  ngOnInit() {
    this.carritoService.getCarrito().subscribe(data => {
      console.log(data);
      this.carrito = data;
      this.total = this.carritoService.getTotal();
    },
      error => alert(error));
  }


    /**
   * addProducto
   */
  addProducto(producto) {
    this.carritoService.addCarrito(producto);
  }


}
