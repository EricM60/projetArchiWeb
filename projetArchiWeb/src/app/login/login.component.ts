import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nom : string = '';
  mdp : string = '';
  role : string = '';
  islogin : boolean = true;
  errorMessage : string ='';

  constructor(private router: Router,private http: HttpClient)
  {
    
  }

  login()
  {
    let bodyData = {
      nom : this.nom,
      mdp : this.mdp,
    };

    this.http.post("http://127.0.0.1:9992/utilisateur/login",bodyData).subscribe( (resultData : any) =>
    {

      if(resultData.status) 
      {
        this.router.navigateByUrl('/accueil');
      }
      else
      {
        alert("nom ou mdp invalide");
      }
      
    });

    
  }

}
