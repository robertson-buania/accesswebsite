import { Client } from './../../../models/client.model';
import { KayService } from './../../../services/kay.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  client:Client={
    nomcomplet:"",
    telephone:"+243",
    date:new Date(),
    mail:"",
    editeur:"Website",
    sexe:"femme"

  }
  constructor(private kayService:KayService) { }

  ngOnInit(): void {

  }
  genererCode(){
    //console.log(this.client)
    if( this.client.nomcomplet!=null && this.client.telephone!=null &&
      this.client.nomcomplet.trim().length!=0 && this.client.telephone.length!=0
      ){
        this.kayService.saveClientBynameAndTel(this.client)
          .subscribe((data)=>{
            alert("Client enregistré avec success !"+this.client.nomcomplet)
            //console.log(data)
          })
      }else{
        alert("Informations incorrectes, éviter les champs vides")
      }

  }

}
