import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdComputoComponent } from './cd-computo/cd-computo.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from './services/serviceRest';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { OpentoggleComponent } from './opentoggle/opentoggle.component';
import { CarritoService } from './service/carrito.service';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { NavbarComponent } from './componentes/navbar/cd-computo.navbar';
import { FooterComponent } from './componentes/footer/cd-computo.footer';
import { SubscriptionListComponent } from './componentes/subscriptions/cd-computo.subscription-list';
import { ContactUsComponent } from './contactenos/cd-computo.contact-us';
import { ShoppingCarComponent } from './carrito/cd-computo.shopping-car';
import { HeaderCarouselComponent } from './componentes/carousel/cd-computo.header-carousel';

@NgModule({
  declarations: [
    AppComponent,
    CdComputoComponent,
    NavbarComponent,
    HeaderCarouselComponent,
    FooterComponent,
    SubscriptionListComponent,
    OpentoggleComponent,
    AutocompleteComponent,
    ContactUsComponent,
    UploadFileComponent,
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
    NgxDropzoneModule,
    ImageUploadModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProductoService, CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
