import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenFragranceComponent } from './pages/men-fragrance/men-fragrance.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
// import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WomenFragranceComponent } from './pages/women-fragrance/women-fragrance.component';
import { SliderComponent } from './shared/slider/slider.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"men-fragrance",component:MenFragranceComponent},
  {path:"women-fragrance",component:WomenFragranceComponent},
  {path:"about-us", component:AboutUsComponent},
  {path:"sign-up", component:SignUpComponent},
  {path:"slider", component:SliderComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
