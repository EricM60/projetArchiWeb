import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RegisterComponent } from './register/register.component';
import { ProjEnseignantComponent } from './proj-enseignant/proj-enseignant.component';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';

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

  {
    path: 'registerProjet',
    component : ProjEnseignantComponent
  },

  {
    path: 'utilisateurs',
    component : ListUtilisateursComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
