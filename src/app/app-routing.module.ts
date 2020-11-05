import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { BodyPageComponent } from './body-page.component';
// import { LandingPageComponent } from './landing-page.component';
// import { LoginFormComponent } from './login-form.component';
// import { RegisterComponent } from './register.component';


const routes: Routes = [
  // {path:"", component: BodyPageComponent}
  // {path:"", component: LandingPageComponent}
  // {path:"login-form", component: LoginFormComponent}
  // {path:"register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
