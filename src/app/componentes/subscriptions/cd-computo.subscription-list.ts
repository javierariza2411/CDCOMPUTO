import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'subscription-list-component',
  templateUrl: './cd-computo.subscription-list.html',
})
export class SubscriptionListComponent implements OnInit {
  ngOnInit() {
    console.log('SubscriptionListComponent');
  }
};