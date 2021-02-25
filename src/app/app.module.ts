import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OurMeatsComponent } from './our-meats/our-meats.component';
import { PricingOrderingComponent } from './pricing-ordering/pricing-ordering.component';
import { FarmToTableComponent } from './farm-to-table/farm-to-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OurMeatsComponent,
    PricingOrderingComponent,
    FarmToTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
