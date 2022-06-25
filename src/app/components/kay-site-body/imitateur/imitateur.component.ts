import { Component, OnInit } from '@angular/core';
import { Imitateur } from 'src/app/models/imitateur.model';
import { KayService } from 'src/app/services/kay.service';

@Component({
  selector: 'app-imitateur',
  templateUrl: './imitateur.component.html',
  styleUrls: ['./imitateur.component.css']
})
export class ImitateurComponent implements OnInit {

  erreur=false;
  reussi=false;
  message:string|null=null;
  imitateur:Imitateur={
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


  creationImitateur(){

    if( this.imitateur.nomcomplet!=null &&this.imitateur.nomcomplet.trim().length!=0 &&
     this.imitateur.telephone!=null && this.imitateur.telephone.length!=0&&
     this.imitateur.adresse!=null && this.imitateur.adresse.length!=0

      ){
     this.kayService.saveImitateur(this.imitateur)
     .subscribe({
      next: (v) => {
        this.message="L'inscription a reussie, veuillez consulter votre adresse mail"
        this.initImitateur();
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
  initImitateur(){
    this.imitateur={
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
