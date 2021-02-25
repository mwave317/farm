import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OurMeatsComponent } from './our-meats/our-meats.component';
import { PricingOrderingComponent } from './pricing-ordering/pricing-ordering.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'meats',
  component: OurMeatsComponent
},
{
  path: 'ordering',
  component: PricingOrderingComponent
},
{
  path: 'contact',
  component: AboutComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
