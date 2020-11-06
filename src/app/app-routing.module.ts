import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyPageComponent } from './body-page/body-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


const routes: Routes = [
  { path: "home", component: BodyPageComponent },
  { path: "home/:id", component: MovieDetailComponent },
  { path: "home", component: LandingPageComponent },
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
