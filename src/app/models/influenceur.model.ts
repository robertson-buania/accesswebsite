import { Client } from './client.model';

export interface Influenceur  {

      id?:number;

      nomcomplet:string ;
     mail:string ;

     telephone:string ;
     editeur:string
     codepromo?:string ;
     adresse:string
     nomreseaux:string ;
     sexe:string;
      solde:number;
      reserve?:string;
      pourcentage:number;

      clients?:Client[] ;
}
