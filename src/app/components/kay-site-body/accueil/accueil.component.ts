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
            alert(this.client.nomcomplet+ " a été  enregistré avec success ! Le paiment mobile peut s'effectuer sur ces numéros en bas")
            //console.log(data)
          })
      }else{
        alert("Informations incorrectes, éviter les champs vides")
      }

  }

  contact(){
    alert("+243 81 49 98 464 : +243 97 73 82 309 :")
  }
}
