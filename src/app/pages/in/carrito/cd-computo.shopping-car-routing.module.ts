import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingCarComponent } from './cd-computo.shopping-car';

const routes: Routes = [
    { path: '', component: ShoppingCarComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarritoRoutingModule { }
