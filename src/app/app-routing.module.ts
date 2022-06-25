import { EntrepreneurComponent } from './components/kay-site-body/entrepreneur/entrepreneur.component';
import { BoursierComponent } from './components/kay-site-body/boursier/boursier.component';
import { DessinateurComponent } from './components/kay-site-body/dessinateur/dessinateur.component';
import { ImitateurComponent } from './components/kay-site-body/imitateur/imitateur.component';
import { BilletComponent } from './components/kay-site-body/billet/billet.component';
import { AccueilComponent } from './components/kay-site-body/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluenceurComponent } from './components/kay-site-body/influenceur/influenceur.component';

const routes: Routes = [

  {path:"",component:AccueilComponent},
  {path:"accueil",component:AccueilComponent},
  {path:"billet",component:BilletComponent},
  {path:"influenceur",component:InfluenceurComponent},
  {path:"imitateur",component:ImitateurComponent},
  {path:"dessinateur",component:DessinateurComponent},
  {path:"boursier",component:BoursierComponent},
  {path:"entrepreneur",component:EntrepreneurComponent},
  {path:"**",component:AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
