import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SingupComponent } from './components/singup/singup.component';
import { LoginComponent } from './components/login/login.component';
import { FootrComponent } from './footr/footr.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{
  path: "",
  component: LoginComponent
},
{
  path: "home",
  component: HomePageComponent
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "signup",
  component: SingupComponent
},
{
  path:"footr",
  component:FootrComponent
},
{
  path:"navbar",
  component:NavbarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
