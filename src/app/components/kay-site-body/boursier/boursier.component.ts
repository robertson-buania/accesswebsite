import { Component, OnInit } from '@angular/core';
import {Entrepreneur} from "../../../models/entrepreneur.model";
import {KayState} from "../../../services/kayState.state";
import {KayService} from "../../../services/kay.service";
import {Boursier} from "../../../models/boursier.model";

@Component({
  selector: 'app-boursier',
  templateUrl: './boursier.component.html',
  styleUrls: ['./boursier.component.css']
})
export class BoursierComponent implements OnInit {

  erreur=false;
  reussi=false;
  message:string|null=null;
  boursier:Boursier={
    nomcomplet:"",
    adresse:"",
    mail:"",
    devise:"USD",
    editeur:"website",
    montant:14,
    telephone:"+243 81 80 634",
    sexe:"homme",
    status:false
  }
  confirmation="sms"
  messageForm:string|null=null
  constructor(private kayService:KayService) { }

  ngOnInit(): void {
  }


  creationBoursier(){
    console.log(this.boursier)
    if( this.boursier.nomcomplet!=null &&this.boursier.nomcomplet.trim().length!=0 &&
      this.boursier.telephone!=null && this.boursier.telephone.length!=0&&
      this.boursier.adresse!=null && this.boursier.adresse.length!=0

    ){
      this.kayService.saveBoursier(this.boursier)
        .subscribe({
          next: (v) => {
            this.message="L'inscription a reussie, veuillez consulter votre adresse mail"
            this.initBoursier();
            setTimeout(()=>{
              this.message=null,
                this.reussi=false
            },9000)
          },
          error: (e) => {
            this.erreur=true
            this.message="Votre inscription a rencontré un problème, veillez réessayer plus tard !"
            setTimeout(()=>{
              this.message=null,
                this.reussi=false
              this.erreur=false
            },9000)
          },
          complete: () => {this.message="Requete envoyé"}
        })
    }else{
      this.messageForm="Informations incorrectes, éviter les champs vides"
    }

  }
  initBoursier(){
    this.boursier={
      nomcomplet:"",
      adresse:"",
      mail:"",
      devise:"USD",
      editeur:"website",
      montant:14,
      telephone:"+243 81 80 634",
      sexe:"homme",
      status:false
    }
  }


}
