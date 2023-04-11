import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.css']
})
export class ListUtilisateursComponent implements OnInit {

  utilisateurs: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://127.0.0.1:9992/utilisateurs').subscribe(
      (result) => {
        this.utilisateurs = result;
      },
      (error) => {
        console.log('Une erreur est survenue lors de la récupération des utilisateurs : ', error);
      }
    );
  }
  

}