import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CdComputoComponent } from './cd-computo.component';
const routes: Routes = [
    { path: '', component: CdComputoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CdComputoRoutingModule { }
