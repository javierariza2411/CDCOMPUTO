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
import {HttpClientModule} from '@angular/common/http';
import {ProductoService} from './services/serviceRest';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegisterComponent } from './user-register/user-register.component';
import {DialogDataExampleDialog } from './user-register/user-register.component'
import {MatDialogModule} from '@angular/material/dialog';
import { OpentoggleComponent } from './opentoggle/opentoggle.component';
import { CarritoComponent} from './carrito/carrito.component';
import { CarritoService } from './service/carrito.service';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';








@NgModule({
  declarations: [
    AppComponent,
    CdComputoComponent,
    NavbarComponent,
    HeaderCarouselComponent,
    FooterComponent,
    SideNavComponent,
    UserRegisterComponent,
    DialogDataExampleDialog,
    OpentoggleComponent,
    CarritoComponent,
    AutocompleteComponent

    
  ],
  exports: [ DialogDataExampleDialog ],
  entryComponents: [DialogDataExampleDialog],
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
    MatDialogModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ProductoService,CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
