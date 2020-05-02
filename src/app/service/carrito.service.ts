import { Injectable } from '@angular/core';
import { Producto } from './../model/producto';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CarritoService {

  private subject: BehaviorSubject<Producto[]> = new BehaviorSubject([]);
  private itemsCarrito: Producto[] = [];

  constructor() {
    this.subject.subscribe(data => this.itemsCarrito = data);
  }

  /**
   * addCarrito
   * @param producto
   */
  addCarrito(producto: Producto) {
    console.log("ENTRO A ADDCARRITO");
    this.subject.next([...this.itemsCarrito, producto]);
  }

  /**
   * clearCarrito
   */
  clearCarrito() {
    this.subject.next(null);
  }

  /**
   * getCarrito
   */
  getCarrito(): Observable<Producto[]> {
    return this.subject;
  }

  /**
   * getTotal
   */
  getTotal() {
    console.log("getTotal");
    let total = this.itemsCarrito.reduce((total, producto: Producto) => { return total + producto.precio; }, 0);
    console.log(total);

    return total;
  }

  /**
   * restar una unidad al carrito
   * @param producto es articulo al que se le va a eliminar una unidad
   * @param productos es el array sobre el que se va a eliminar el elemento
   */
  minusArticle(producto, productos) {
    if (productos && productos.length > 0) {
      if (productos.find(articulo => articulo.arti_codigo === producto.arti_codigo)) {
        productos[productos.findIndex(articulo => articulo.arti_codigo === producto.arti_codigo)].cantidad -= 1;
        productos[productos.findIndex(articulo => articulo.arti_codigo === producto.arti_codigo)].total -= producto.arti_precioventa1;
      }
    }
    localStorage.setItem('product-car', JSON.stringify(productos));
  }

  /**
   * sumar una unidad a un articulo
   * @param producto es el articulo al que se le va a sumar una unidad
   * @param productos es el array en el que se va a buscar el articulo para sumarle uno
   */
  plusArticle(producto, productos) {
    if (productos && productos.length > 0) {
      if (productos.find(articulo => articulo.arti_codigo === producto.arti_codigo)) {
        productos[productos.findIndex(articulo => articulo.arti_codigo === producto.arti_codigo)].cantidad += 1;
        productos[productos.findIndex(articulo => articulo.arti_codigo === producto.arti_codigo)].total += producto.arti_precioventa1;
      }
    }
    localStorage.setItem('product-car', JSON.stringify(productos));
  }

  getValorArray(atribute) {
    let valor = 0;
    if (localStorage.getItem('product-car')) {
      const articulos = JSON.parse(localStorage.getItem('product-car'));
      for (let i = 0; articulos.length > i; i++) {
        valor += articulos[i][atribute];
      }
    }
    return valor;
  }
}
