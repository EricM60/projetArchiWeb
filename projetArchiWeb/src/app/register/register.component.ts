import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nom : string="";
  mdp : string="";
  role : string="";

  constructor(private http:HttpClient)
  {

  }

  ngOnInit() :void
  {

  }

  register()
  {
    let bodydata =
    {
      "nom" : this.nom,
      "mdp" : this.mdp,
      "role" : this.role,
    };
    this.http.post("http://127.0.0.1:9992/utilisateur/create",bodydata).subscribe((resultData : any)=>
    {
      alert("utilisateur creer")
    });
  }

  save()
  {
    this.register();
  }

}
