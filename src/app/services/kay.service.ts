import { Imitateur } from './../models/imitateur.model';
import { Entrepreneur } from './../models/entrepreneur.model';
import { Dessinateur } from './../models/dessinateur.model';

import { Client } from './../models/client.model';
import { Administrateur } from './../models/administrateur.model';
import { Revendeur } from './../models/revendeur.model';
import { Codekay } from './../models/codekay.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Influenceur } from '../models/influenceur.model';

@Injectable({
  providedIn: 'root'
})
export class KayService {

  private urlServeur="http://localhost:8181/dash/kay"
  constructor(private httpClient:HttpClient) { }

  getAllClients(){
    return this.httpClient.get<Client[]>(`${this.urlServeur}/allclients`);
  }
  getAllInfluenceurs(){
    return this.httpClient.get<Influenceur[]>(`${this.urlServeur}/allinfluenceurs`);
  }

  getAllAdministrateurs(){
    return this.httpClient.get<Administrateur[]>(`${this.urlServeur}/alladmin`);
  }

  getAllRevendeurs(){
    return this.httpClient.get<Revendeur[]>(`${this.urlServeur}/allrevendeurs`);
  }

  getAllCodes(){
    return this.httpClient.get<Codekay[]>(`${this.urlServeur}/allcodes`);
  }
  saveClientBynameAndTel(client:Client){
  /*let url=btoa(JSON.stringify(client))
  console.log(url)
  let urltboa=atob(JSON.stringify(client))
  console.log(urltboa)*/
    return this.httpClient.post<Client>(`${this.urlServeur}/saveclient`,client);
  }
  /*
  Dessinateur
  */

  getAllDessinateurs(){
    return this.httpClient.get<Dessinateur[]>(`${this.urlServeur}/alldessinateurs`);
  }

  saveDessinateur(dessinateur:Dessinateur ){
    return this.httpClient.post<Dessinateur>(`${this.urlServeur}/savedessinateur`,dessinateur);
  }

  deleteDessinateur(idDessinateur:number ){
    return this.httpClient.post<Dessinateur>(`${this.urlServeur}/deletedessinateur`,idDessinateur);
  }

   /*
  Entrepreneur
  */

  getAllEntrepreneur(){
    return this.httpClient.get<Entrepreneur[]>(`${this.urlServeur}/allentrepreneurs`);
  }

  saveEntrepreneur(entrepreneur:Entrepreneur ){
    return this.httpClient.post<Entrepreneur>(`${this.urlServeur}/saveentrepreneur`,entrepreneur);
  }

  deleteEntrepreneur(idEntrepreneur:number ){
    return this.httpClient.post<Entrepreneur>(`${this.urlServeur}/deleteentrepreneur`,idEntrepreneur);
  }

   /*
  Imitateur
  */

  getAllImitateur(){
    return this.httpClient.get<Imitateur[]>(`${this.urlServeur}/allimitateurs`);
  }

  saveImitateur(imitateur:Imitateur ){
    return this.httpClient.post<Imitateur>(`${this.urlServeur}/saveimitateur`,imitateur);
  }

  deleteImitateur(idImitateur:number ){
    return this.httpClient.post<Imitateur>(`${this.urlServeur}/deleteimitateur`,idImitateur);
  }

   /*
  Influenceur
  */

  getAllInfluenceur(){
    return this.httpClient.get<Influenceur[]>(`${this.urlServeur}/allinfluenceurs`);
  }

  saveInfluenceur(influenceur:Influenceur ){
    return this.httpClient.post<Influenceur>(`${this.urlServeur}/saveinfluenceur`,influenceur);
  }

  deleteInfluenceur(idInfluenceur:number ){
    return this.httpClient.post<Influenceur>(`${this.urlServeur}/deleteinfluenceur`,idInfluenceur);
  }
}
