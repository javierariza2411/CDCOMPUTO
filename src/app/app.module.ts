import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdComputoComponent } from './cd-computo/cd-computo.component';
import { NavbarComponent } from './cd-computo/cd-computo.navbar';
import { HeaderCarouselComponent } from './cd-computo/cd-computo.header-carousel';
import { SideNavComponent } from './cd-computo/cd-computo.side-nav';
import { FooterComponent } from './cd-computo/cd-computo.footer';
import {HttpClientModule} from '@angular/common/http';
import {ProductoService} from './services/serviceRest';



@NgModule({
  declarations: [
    AppComponent,
    CdComputoComponent,
    NavbarComponent,
    HeaderCarouselComponent,
    FooterComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
