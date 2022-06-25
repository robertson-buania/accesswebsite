import { Component, OnInit } from '@angular/core';
import { Influenceur } from 'src/app/models/influenceur.model';
import { KayService } from 'src/app/services/kay.service';

@Component({
  selector: 'app-influenceur',
  templateUrl: './influenceur.component.html',
  styleUrls: ['./influenceur.component.css']
})
export class InfluenceurComponent implements OnInit {

  message=""
  nom=""
  reserve=""
  influenceur:Influenceur|null=null
  constructor(private kayService:KayService) { }
  clicked=false
  ngOnInit(): void {
  }

  findInfluenceur() {
    this.clicked=true
    this.kayService.findInfluenceur(this.nom,this.reserve)
     .subscribe({
      next: (v) => {
        this.influenceur=v
        this.clicked=false
      },
      error: (e) => {
        this.message="La connexion a échoué !"
        this.clicked=false
        setTimeout(()=>{
          this.clicked=false
          this.message=""
        },9000)
      },
      complete: () => {this.message="succès" ;this.clicked=false}
  })
   /*  if(this.nom.trim() !="" &&this.reserve.trim() !=""
    && this.nom.length!=0 && this.reserve.length!=0){
      this.kayService.findInfluenceur(this.nom,this.reserve)
            .subscribe
     }else{
      this.message="Informations incorrectes !"
      setTimeout(()=>{
        this.message=""
      },4000)
     } */
  }
}
