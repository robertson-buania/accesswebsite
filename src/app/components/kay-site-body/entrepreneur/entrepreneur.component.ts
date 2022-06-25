import { KayState } from './../../../services/kayState.state';
import { KayService } from './../../../services/kay.service';
import { Entrepreneur } from './../../../models/entrepreneur.model';
import { Component, OnInit } from '@angular/core';
import { catchError, map, of, startWith } from 'rxjs';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.css']
})
export class EntrepreneurComponent implements OnInit {
  erreur=false;
  reussi=false;
  message:string|null=null;
  entrepreneur:Entrepreneur={
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
  okEntrepreneurSate:KayState <Entrepreneur> |null=null
  constructor(private kayService:KayService) { }

  ngOnInit(): void {
  }


  creationEntrepreneur(){

    if( this.entrepreneur.nomcomplet!=null &&this.entrepreneur.nomcomplet.trim().length!=0 &&
     this.entrepreneur.telephone!=null && this.entrepreneur.telephone.length!=0&&
     this.entrepreneur.adresse!=null && this.entrepreneur.adresse.length!=0

      ){
     this.kayService.saveEntrepreneur(this.entrepreneur)
     .subscribe({
      next: (v) => {

        this.initEntrepreneur();
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
      complete: () => {this.message="L'inscription a reussie, veuillez consulter votre adresse mail"}
  })
      }else{
        this.messageForm="Informations incorrectes, éviter les champs vides"
      }

  }
  initEntrepreneur(){
    this.entrepreneur={
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
