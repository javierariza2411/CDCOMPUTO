import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdComputoComponent } from './cd-computo/cd-computo.component';
import { CarritoComponent} from './carrito/carrito.component'
import { CatalogoComponent } from './catalogo/catalogo.component';



const routes: Routes = [
  { path: "", redirectTo:"/inicio",pathMatch:"full"},
  {path:'inicio', component: CdComputoComponent},
  {path:'ver-Carrito', component: CarritoComponent},
  {path:'ver-Catalogo', component: CatalogoComponent}


  // {path: 'contact', component:''},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
