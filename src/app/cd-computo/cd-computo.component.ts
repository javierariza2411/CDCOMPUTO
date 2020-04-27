import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/serviceRest';
import { Subscription } from 'rxjs/Subscription';
import { CarritoService } from '../service/carrito.service';
import { Producto } from './../model/producto';
import { ProductosService } from '../service/productos.service';


@Component({
  selector: 'app-cd-computo',
  templateUrl: './cd-computo.component.html',
  styleUrls: ['./cd-computo.component.css'],
  providers: [ProductosService,CarritoService]
})
export class CdComputoComponent implements OnInit {

  public listadoDeImagenesArticulo: any = [
    { codigoArticulo: '10-106', ruta: 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/v/3/v370.jpg' },
    { codigoArticulo: '1034394370', ruta: 'https://i.linio.com/p/5c617a66a6a47d46bc0c43a3a81faccf-product.jpg' },
    { codigoArticulo: '1034394373', ruta: 'https://http2.mlstatic.com/multifuncional-epson-l3110-reemplazo-l380-gtia-con-epson-D_NQ_NP_956950-MCO31537278441_072019-O.webp' },
    { codigoArticulo: '24-592', ruta: 'https://images-na.ssl-images-amazon.com/images/I/41XgktGtWxL._SX466_.jpg' },
    { codigoArticulo: '2651071956', ruta: 'https://intermediary-i.linio.com/p/7187cb7b4aca7c1d46b98cd9859676bb-product.jpg' },
    { codigoArticulo: '2651072403', ruta: 'https://i.linio.com/p/2967e18c1ba1820a2f50730d6349dd4a-product.jpg' },
    { codigoArticulo: '9078184998', ruta: 'https://intermediary-i.linio.com/p/4a2e4f3dd12a676c25194ea70053621a-product.jpg' },
    { codigoArticulo: '9078187109', ruta: 'https://i.linio.com/p/0834a1f941ca407e40bab808d46f2cff-product.jpg' },
    { codigoArticulo: '9162875706', ruta: 'https://mx-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/Z/6/Z6Z95A-1_T1540958524.png' },
    { codigoArticulo: '9254520255', ruta: 'https://co-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/3/U/3UR68AA-1_T1562694046.png' }
  ];



  public listaArticulosTemp: any = null;
  public listaArticulos: any = null;
  public producto: any;
  private subscription: Subscription;
  public productos: Array<any> = [];
    public total: number;


  constructor(private productoService: ProductoService,private productosService: ProductosService, private carritoServices:CarritoService) { 

    console.log("ENTRO A CONSTRUCTOR")
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

  addProducto(producto) {

    console.log(producto);
    this.carritoServices.addCarrito(producto);
  }

  getCatalogo(){


    console.log("CATALOGO");

    this.productosService.getProductos()
      .then(data => {
        this.productos = (data as Array<Producto>).filter(x => x.novedad !== true);
      })
      .catch(error => alert(error));


      console.log(this.productos);
  }


  ngOnInit() {

    //  this.getCatalogo();

    // this.carritoServices.getCarrito().subscribe(data => {
    //   this.total = this.carritoServices.getTotal();

    //   console.log("el total es"+this.total)
    // },
    //   error => alert(error));

    var articuloImagen = new Object(),
      arti_precioventa4 = "",
      arti_descripcion = "",
      arti_precioventa3 = 0,
      arti_codigo = "",
      arti_precioventa2 = 0,
      arti_precioventa1 = 0,
      arti_cantidad = 0,
      arti_bodega = "",
      arti_ruta = "";


    var rutaString = "";

    this.productoService.getProductos().subscribe((data: any[]) => {
      this.listaArticulosTemp = data;
      console.log(data);
      this.listaArticulos = new Array();
      for (let articulo of this.listaArticulosTemp) {
        for (let imagen of this.listadoDeImagenesArticulo) {
          if (articulo.arti_codigo === imagen.codigoArticulo) {
            rutaString = imagen.ruta;
          }
        }
        if (articulo.arti_cantidad > 0) {
          articuloImagen = new Object();
          articuloImagen["arti_precioventa4"] = articulo.arti_precioventa4;
          articuloImagen["arti_descripcion"] = articulo.arti_descripcion;
          articuloImagen["arti_precioventa3"] = articulo.arti_precioventa3;
          articuloImagen["arti_codigo"] = articulo.arti_codigo;
          articuloImagen["arti_precioventa2"] = articulo.arti_precioventa2;
          articuloImagen["arti_precioventa1"] = articulo.arti_precioventa1;
          articuloImagen["arti_cantidad"] = articulo.arti_cantidad;
          articuloImagen["arti_bodega"] = articulo.arti_bodega;
          articuloImagen["arti_ruta"] = rutaString;
          this.listaArticulos.push(articuloImagen);
        }
      }


     

    });



   
  
    // /**
    //  * addProducto
    //  */
   


  }
};

