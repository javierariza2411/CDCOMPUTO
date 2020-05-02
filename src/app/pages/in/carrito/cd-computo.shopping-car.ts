import { Component, OnInit, DoCheck } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'shopping-car-component',
  templateUrl: './cd-computo.shopping-car.html',
  styleUrls: ['./cd-computo.shopping-car.css'],
  providers: [CarritoService]
})
export class ShoppingCarComponent implements OnInit, DoCheck {
  articles: any;
  valor: any;

  constructor(private carritoServices: CarritoService) { }

  ngDoCheck(): void {
    if (localStorage.getItem('product-car')) {
      this.valor = this.carritoServices.getValorArray('total');
    }
  }

  ngOnInit() {
    if (localStorage.getItem('product-car')) {
      this.articles = JSON.parse(localStorage.getItem('product-car'));
      this.valor = this.carritoServices.getValorArray('total');
    } else {
      this.articles = [];
    }
  }

  quitarArticulo(producto) {
    this.carritoServices.minusArticle(producto, this.articles);
  }

  agregarArticulo(producto) {
    this.carritoServices.plusArticle(producto, this.articles);
  }

}
