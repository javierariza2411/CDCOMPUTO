import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './cd-computo.contact-us-routing.module';
import { ContactUsComponent } from './cd-computo.contact-us';

@NgModule({
    declarations: [ContactUsComponent],
    imports: [CommonModule, ContactUsRoutingModule],
    exports: [],
    providers: [],
})
export class ContactUsModule { }