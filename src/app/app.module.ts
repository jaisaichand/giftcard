import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { AppRoutingModule } from './app-routing.module';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalformComponent } from './modalform/modalform.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ItemrowComponent } from './itemrow/itemrow.component';
import {  HttpClientModule } from '@angular/common/http';
import { CarouselModule, CarouselConfig } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductdetailComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    ModalformComponent,
    LoginComponent,
    AboutusComponent,
    ItemrowComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],
  providers: [CarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
