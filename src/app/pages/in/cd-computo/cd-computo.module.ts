import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdComputoComponent } from './cd-computo.component';
import { CdComputoRoutingModule } from './cd-computo-routing.module';
import { HeaderCarouselComponent } from 'src/app/componentes/carousel/cd-computo.header-carousel';
import { SubscriptionListComponent } from 'src/app/componentes/subscriptions/cd-computo.subscription-list';

@NgModule({
    declarations: [
        CdComputoComponent,
        HeaderCarouselComponent,
        SubscriptionListComponent
    ],
    imports: [
        CommonModule,
        CdComputoRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [],
    providers: [],
})
export class CdComputoModule { }