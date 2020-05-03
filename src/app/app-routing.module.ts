import { UploadFileComponent } from './upload-file/upload-file.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdComputoComponent } from './cd-computo/cd-computo.component';
import { ContactUsComponent } from './contactenos/cd-computo.contact-us';
import { ShoppingCarComponent } from './carrito/cd-computo.shopping-car';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: CdComputoComponent },
  { path: 'contactanos', component: ContactUsComponent },
  { path: 'shoppingCar', component: ShoppingCarComponent },
  { path: 'uploadImage', component: UploadFileComponent }



  // {path: 'contact', component:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
