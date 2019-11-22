import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdComputoComponent } from './cd-computo/cd-computo.component';


const routes: Routes = [
  {path:'', component:CdComputoComponent}
  // {path: 'contact', component:''},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
