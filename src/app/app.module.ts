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
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from './services/serviceRest';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CarritoService } from './service/carrito.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { FooterComponent } from './componentes/footer/cd-computo.footer';
import { NavbarComponent} from './componentes/navbar/cd-computo.navbar';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    UploadFileComponent
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
  providers: [ProductoService, CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
