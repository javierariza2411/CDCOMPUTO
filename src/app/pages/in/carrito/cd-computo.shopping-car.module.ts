import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoRoutingModule } from './cd-computo.shopping-car-routing.module';
import { ShoppingCarComponent } from './cd-computo.shopping-car';

@NgModule({
    declarations: [ShoppingCarComponent],
    imports: [CommonModule, CarritoRoutingModule],
    exports: [],
    providers: [],
})
export class CarritoModule { }