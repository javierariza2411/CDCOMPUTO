import { BrowserModule } from '@angular/platform-browser';
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
import { NavbarComponent } from './cd-computo/cd-computo.navbar';
import { HeaderCarouselComponent } from './cd-computo/cd-computo.header-carousel';
import { SideNavComponent } from './cd-computo/cd-computo.side-nav';
import { FooterComponent } from './cd-computo/cd-computo.footer';
import {HttpClientModule} from '@angular/common/http';
import {ProductoService} from './services/serviceRest';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegisterComponent } from './user-register/user-register.component';






@NgModule({
  declarations: [
    AppComponent,
    CdComputoComponent,
    NavbarComponent,
    HeaderCarouselComponent,
    FooterComponent,
    SideNavComponent,
    UserRegisterComponent
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
    MatAutocompleteModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
