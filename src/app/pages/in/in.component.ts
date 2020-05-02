import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.scss']
})
export class InComponent implements OnInit, DoCheck {
  articles: any;

  constructor() {
    if (localStorage.getItem('product-car')) {
      this.articles = JSON.parse(localStorage.getItem('product-car'));
    } else {
      this.articles = [];
    }
  }

  ngDoCheck(): void {
    this.articles = JSON.parse(localStorage.getItem('product-car'));
  }

  ngOnInit() {
  }

}
