import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {
  MatToolbarModule,  
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdComputoComponent } from './cd-computo/cd-computo.component';
import { NavbarComponent } from './cd-computo/ui-ux/cd-computo.navbar';
import { HeaderCarouselComponent } from './cd-computo/ui-ux/cd-computo.header-carousel';
import { SideNavComponent } from './cd-computo/ui-ux/cd-computo.side-nav';
import { FooterComponent } from './cd-computo/ui-ux/cd-computo.footer';
import { SubscriptionListComponent } from './cd-computo/ui-ux/cd-computo.subscription-list';
import { ContactUsComponent } from './cd-computo/ui-ux/cd-computo.contact-us';
import {HttpClientModule} from '@angular/common/http';
import {ProductoService} from './services/serviceRest';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { OpentoggleComponent } from './opentoggle/opentoggle.component';
import { CarritoComponent} from './carrito/carrito.component';
import { CarritoService } from './service/carrito.service';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CatalogoComponent} from './catalogo/catalogo.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CargaImagenesComponent } from './carga-imagenes/carga-imagenes.component';
import { ShoppingCarComponent } from './cd-computo/ui-ux/cd-computo.shopping-car';


@NgModule({
  declarations: [
    AppComponent,
    CdComputoComponent,
    NavbarComponent,
    HeaderCarouselComponent,
    FooterComponent,
    SubscriptionListComponent,
    SideNavComponent,
    OpentoggleComponent,
    CarritoComponent,
    AutocompleteComponent,
    CatalogoComponent,
    ContactUsComponent,
    CargaImagenesComponent,
    ShoppingCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDialogModule,
    NgxDropzoneModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ProductoService,CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
