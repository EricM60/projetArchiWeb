import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proj-enseignant',
  templateUrl: './proj-enseignant.component.html',
  styleUrls: ['./proj-enseignant.component.css']
})
export class ProjEnseignantComponent {

  titre : string="";
  competences : string="";
  createur : string="";
  etudiants : string="";

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
      "titre" : this.titre,
      "competences" : this.competences,
      "createur" : this.createur,
      "etudiants" : this.etudiants,
    };
    this.http.post("http://127.0.0.1:9992/projet/create",bodydata).subscribe((resultData : any)=>
    {
      alert("projet creer")
    });
  }

  save()
  {
    this.register();
  }
  
}
