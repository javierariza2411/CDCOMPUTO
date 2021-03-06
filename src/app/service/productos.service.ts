import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Producto } from './../model/producto';

@Injectable()
export class ProductosService {

  private productos: Array<Producto> = [];

  constructor() {

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

  /** 
   * getProductos
   */
  getProductos() {
    console.log("ENTRO A GETPRODUCTOS");
    return new Promise((resolve, reject) => {
      if (this.productos.length > 0) {
        console.log(this.productos);
        resolve(this.productos);
      } else {
        reject('No hay productos disponibles');
      }
    });
  }

}
