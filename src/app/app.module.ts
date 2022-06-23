import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KaySiteNavComponent } from './components/kay-site-nav/kay-site-nav.component';
import { KaySiteFooterComponent } from './components/kay-site-footer/kay-site-footer.component';
import { KaySiteBodyComponent } from './components/kay-site-body/kay-site-body.component';
import { BilletComponent } from './components/kay-site-body/billet/billet.component';
import { DessinateurComponent } from './components/kay-site-body/dessinateur/dessinateur.component';
import { ImitateurComponent } from './components/kay-site-body/imitateur/imitateur.component';
import { EntrepreneurComponent } from './components/kay-site-body/entrepreneur/entrepreneur.component';
import { BoursierComponent } from './components/kay-site-body/boursier/boursier.component';
import { AccueilComponent } from './components/kay-site-body/accueil/accueil.component';
import { AproposComponent } from './components/kay-site-body/apropos/apropos.component';

@NgModule({
  declarations: [
    AppComponent,
    KaySiteNavComponent,
    KaySiteFooterComponent,
    KaySiteBodyComponent,
    BilletComponent,
    DessinateurComponent,
    ImitateurComponent,
    EntrepreneurComponent,
    BoursierComponent,
    AccueilComponent,
    AproposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
