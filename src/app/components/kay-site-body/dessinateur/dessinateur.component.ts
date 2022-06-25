import { Component, OnInit } from '@angular/core';
import { Dessinateur } from 'src/app/models/dessinateur.model';
import { KayService } from 'src/app/services/kay.service';

@Component({
  selector: 'app-dessinateur',
  templateUrl: './dessinateur.component.html',
  styleUrls: ['./dessinateur.component.css']
})
export class DessinateurComponent implements OnInit {
  erreur=false;
  reussi=false;
  message:string|null=null;
  dessinateur:Dessinateur={
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
  errormessage=""
  confirmation="sms"
  messageForm:string|null=null
  constructor(private kayService:KayService) { }

  ngOnInit(): void {
  }


  creationDessinateur(){

    if( this.dessinateur.nomcomplet!=null &&this.dessinateur.nomcomplet.trim().length!=0 &&
     this.dessinateur.telephone!=null && this.dessinateur.telephone.length!=0&&
     this.dessinateur.adresse!=null && this.dessinateur.adresse.length!=0

      ){
     this.kayService.saveDessinateur(this.dessinateur)
     .subscribe({
      next: (v) => {
        this.message="L'inscription a reussie, veuillez consulter votre adresse mail"
        this.initDessinateur();
        alert("Vous etes enregistré avec success !"+v.nomcomplet + "un mail ou sms vous sera envoyé ")
        this.reussi=true
        this.erreur=false
        setTimeout(()=>{
          this.message=null
          this.erreur=false
        },9000)
      },
      error: (e) => {
        this.erreur=true
        this.reussi=false
        this.errormessage="Votre inscription a rencontré un problème, veillez réessayer plus tard !"
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
  initDessinateur(){
    this.dessinateur={
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
