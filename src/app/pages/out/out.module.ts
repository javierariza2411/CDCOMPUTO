import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutRoutingModule } from './out-routing.module';
import { OutComponent } from './out.component';


@NgModule({
  declarations: [OutComponent],
  imports: [
    CommonModule,
    OutRoutingModule
  ]
})
export class OutModule { }
