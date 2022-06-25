import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kay-site-nav',
  templateUrl: './kay-site-nav.component.html',
  styleUrls: ['./kay-site-nav.component.css']
})
export class KaySiteNavComponent implements OnInit {

  activeAccueil=true
  activeDessinateur=false
  activeImitateu=false
  activeBillet=false
  activeInfluenceur=false
  activeBourse=false
  activeEntrepreneur=false
  constructor() { }

  ngOnInit(): void {
  }

  accueil(){
    this.activeAccueil=true;
    this.activeDessinateur=false
    this. activeImitateu=false
    this. activeBillet=false
    this.activeInfluenceur=false
    this.activeBourse=false
    this.activeEntrepreneur=false
  }
  billet(){
    this.activeAccueil=false;
    this.activeDessinateur=false
    this. activeImitateu=false
    this. activeBillet=true
    this.activeBourse=false
    this.activeInfluenceur=false
    this.activeEntrepreneur=false
  }
  entrepreneur(){
    this.activeAccueil=false;
    this.activeDessinateur=false
    this. activeImitateu=false
    this.activeInfluenceur=false
    this. activeBillet=false
    this.activeBourse=false
    this.activeEntrepreneur=true
  }
  bourse(){
    this.activeAccueil=false;
    this.activeDessinateur=false
    this. activeImitateu=false
    this. activeBillet=false
    this.activeBourse=true
    this.activeEntrepreneur=false
    this.activeInfluenceur=false
  }
  imitateur(){
    this.activeAccueil=false;
    this.activeDessinateur=false
    this. activeImitateu=true
    this. activeBillet=false
    this.activeInfluenceur=false
    this.activeBourse=false
    this.activeEntrepreneur=false
  }
  dessinateur(){
    this.activeAccueil=false;
    this.activeDessinateur=false
    this. activeImitateu=false
    this. activeBillet=false
    this.activeBourse=false
    this.activeEntrepreneur=false

    this.activeInfluenceur=false
  }
  influenceur(){
    this.activeAccueil=false;
    this.activeDessinateur=false
    this. activeImitateu=false
    this. activeBillet=false
    this.activeBourse=false
    this.activeEntrepreneur=false
    this.activeInfluenceur=true
  }

}
