import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactUsComponent } from './cd-computo.contact-us';

const routes: Routes = [
    { path: '', component: ContactUsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactUsRoutingModule { }
