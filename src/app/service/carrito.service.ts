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
    let total=this.itemsCarrito.reduce((total, producto: Producto) => { return total + producto.precio; }, 0);
    console.log(total);

    return total;
  }

  


}
