import { Client } from './client.model';
export interface Revendeur{

  id?:number;
  nomcomplet:string;
  telephone:string;
  adresse:string;
  code?:string;
  email:string;
  motdepasse:string;
  solde?:number;
  sexe:string;
  codeparent:string;

  actif:boolean;

  clients:Client[];

}
