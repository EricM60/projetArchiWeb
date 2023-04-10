import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },

  {
    path: 'accueil',
    component : AccueilComponent
  },

  {
    path: 'register',
    component : RegisterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
