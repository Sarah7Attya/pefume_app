import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenFragranceComponent } from './pages/men-fragrance/men-fragrance.component';
import { WomenFragranceComponent } from './pages/women-fragrance/women-fragrance.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './shared/slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared/shared.module';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenFragranceComponent,
    WomenFragranceComponent,
    SignUpComponent,
    AboutUsComponent,
    
    HomeComponent,
    SliderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
