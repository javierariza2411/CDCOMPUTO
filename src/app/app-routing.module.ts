import { UploadFileComponent } from './upload-file/upload-file.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdComputoComponent } from './cd-computo/cd-computo.component';
import { CarritoComponent} from './carrito/carrito.component'
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactUsComponent } from './cd-computo/ui-ux/cd-computo.contact-us';
import { ShoppingCarComponent } from './cd-computo/ui-ux/cd-computo.shopping-car';

const routes: Routes = [
  { path: "", redirectTo:"/inicio",pathMatch:"full"},
  {path:'inicio', component: CdComputoComponent},
  {path:'ver-Carrito', component: CarritoComponent},
  {path:'ver-Catalogo', component: CatalogoComponent},
  {path:'contactanos', component: ContactUsComponent},
  {path:'shoppingCar', component: ShoppingCarComponent},
  {path:'uploadImage', component: UploadFileComponent}
 


  // {path: 'contact', component:''},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
