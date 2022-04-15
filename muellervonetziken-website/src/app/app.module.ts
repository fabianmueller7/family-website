import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DerfamiliennamemuellerComponent } from './derfamiliennamemueller/derfamiliennamemueller.component';
import { WillkommenComponent } from './willkommen/willkommen.component';
import { EtzikenUndDieDortAnsaessigenMuellerComponent } from './etziken-und-die-dort-ansaessigen-mueller/etziken-und-die-dort-ansaessigen-mueller.component';
import { DieGenerationenUndZweigeComponent } from './die-generationen-und-zweige/die-generationen-und-zweige.component';
import { DieWappenComponent } from './die-wappen/die-wappen.component';
import { OrganisatorischesComponent } from './organisatorisches/organisatorisches.component';
import { DieVorgenerationenComponent } from './fgenerationenundzweige/die-vorgenerationen/die-vorgenerationen.component';
import { DieErstenFuenfGenerationenComponent } from './fgenerationenundzweige/die-ersten-fuenf-generationen/die-ersten-fuenf-generationen.component';
import { SchnidersViggisComponent } from './fgenerationenundzweige/schniders-viggis/schniders-viggis.component';
import { ZweigDerSphinxComponent } from './fgenerationenundzweige/zweig-der-sphinx/zweig-der-sphinx.component';
import { AmerikanischerZweigComponent } from './fgenerationenundzweige/amerikanischer-zweig/amerikanischer-zweig.component';
import { MeierEggenSchwilerSpillmannZweigComponent } from './fgenerationenundzweige/meier-eggen-schwiler-spillmann-zweig/meier-eggen-schwiler-spillmann-zweig.component';
import { RenatoZweigComponent } from './fgenerationenundzweige/renato-zweig/renato-zweig.component';
import { VerwantschaftlicheBeziehungenComponent } from './fgenerationenundzweige/verwantschaftliche-beziehungen/verwantschaftliche-beziehungen.component';
import { DasWappenVon1959Component } from './fdiewappen/das-wappen-von1959/das-wappen-von1959.component';
import { DasWappenVon1893Component } from './fdiewappen/das-wappen-von1893/das-wappen-von1893.component';
import { DasWappenVon1968Component } from './fdiewappen/das-wappen-von1968/das-wappen-von1968.component';
import { KontaktComponent } from './forganisatoirsches/kontakt/kontakt.component';
import { QuellenComponent } from './forganisatoirsches/quellen/quellen.component';
import { JahresberichtComponent } from './forganisatoirsches/jahresbericht/jahresbericht.component';

@NgModule({
  declarations: [
    AppComponent,
    DerfamiliennamemuellerComponent,
    WillkommenComponent,
    EtzikenUndDieDortAnsaessigenMuellerComponent,
    DieGenerationenUndZweigeComponent,
    DieWappenComponent,
    OrganisatorischesComponent,
    DieVorgenerationenComponent,
    DieErstenFuenfGenerationenComponent,
    SchnidersViggisComponent,
    ZweigDerSphinxComponent,
    AmerikanischerZweigComponent,
    MeierEggenSchwilerSpillmannZweigComponent,
    RenatoZweigComponent,
    VerwantschaftlicheBeziehungenComponent,
    DasWappenVon1959Component,
    DasWappenVon1893Component,
    DasWappenVon1968Component,
    KontaktComponent,
    QuellenComponent,
    JahresberichtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
