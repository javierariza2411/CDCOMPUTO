import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InComponent } from './in.component';

const routes: Routes = [
  {
    path: '',
    component: InComponent,
    children: [
      { path: 'inicio', loadChildren: () => import('./cd-computo/cd-computo.module').then(m => m.CdComputoModule) },
      { path: 'contactanos', loadChildren: () => import('./contactenos/cd-computo.contact-us.module').then(m => m.ContactUsModule) },
      { path: 'shoppingCar', loadChildren: () => import('./carrito/cd-computo.shopping-car.module').then(m => m.CarritoModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InRoutingModule { }
