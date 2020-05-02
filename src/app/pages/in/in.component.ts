import { Component, OnInit, DoCheck } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.scss'],
  providers: [CarritoService]
})
export class InComponent implements OnInit, DoCheck {
  articles: any;

  constructor(private carritoServices: CarritoService) {
    if (localStorage.getItem('product-car')) {
      this.articles = this.carritoServices.getValorArray('cantidad');
    } else {
      this.articles = [];
    }
  }

  ngDoCheck(): void {
    if (localStorage.getItem('product-car')) {
      this.articles = this.carritoServices.getValorArray('cantidad');
    }
  }

  ngOnInit() {
  }

}
