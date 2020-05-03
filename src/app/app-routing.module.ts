import { UploadFileComponent } from './upload-file/upload-file.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'in/inicio', pathMatch: 'full' },
  { path: 'uploadImage', component: UploadFileComponent },
  { path: 'in', loadChildren: () => import('./pages/in/in.module').then(m => m.InModule) },
  { path: 'out', loadChildren: () => import('./pages/out/out.module').then(m => m.OutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
