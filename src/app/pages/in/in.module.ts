import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InRoutingModule } from './in-routing.module';
import { InComponent } from './in.component';

@NgModule({
  declarations: [
    InComponent
  ],
  imports: [
    CommonModule,
    InRoutingModule
  ]
})
export class InModule { }
