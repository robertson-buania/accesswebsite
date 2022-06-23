import { Revendeur } from './revendeur.model';
import { Codekay } from './codekay.model';

export interface Client{
  id?:number;
  nomcomplet:string;
  telephone:string;
  editeur:string,
  mail:string,
  sexe:string,
  idrevendeur?:number;
  codepromo?:number;
  date:Date;
  revendeur?:Revendeur ;
  codekay?:Codekay ;

  /*
    private String codepromo;
    private LocalDate date;
    @Column(length = 15)
    private String devise;
    @Column(length = 10)
    private String sexe;
    private Double montant;

  */
}
