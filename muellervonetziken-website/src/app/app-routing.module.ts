import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DerfamiliennamemuellerComponent } from './derfamiliennamemueller/derfamiliennamemueller.component';
import { DieGenerationenUndZweigeComponent } from './die-generationen-und-zweige/die-generationen-und-zweige.component';
import { DieWappenComponent } from './die-wappen/die-wappen.component';
import { EtzikenUndDieDortAnsaessigenMuellerComponent } from './etziken-und-die-dort-ansaessigen-mueller/etziken-und-die-dort-ansaessigen-mueller.component';
import { DasWappenVon1893Component } from './fdiewappen/das-wappen-von1893/das-wappen-von1893.component';
import { DasWappenVon1959Component } from './fdiewappen/das-wappen-von1959/das-wappen-von1959.component';
import { DasWappenVon1968Component } from './fdiewappen/das-wappen-von1968/das-wappen-von1968.component';
import { AmerikanischerZweigComponent } from './fgenerationenundzweige/amerikanischer-zweig/amerikanischer-zweig.component';
import { AnsaessigerZweigComponent } from './fgenerationenundzweige/ansaessiger-zweig/ansaessiger-zweig.component';
import { DieErstenFuenfGenerationenComponent } from './fgenerationenundzweige/die-ersten-fuenf-generationen/die-ersten-fuenf-generationen.component';
import { DieVorgenerationenComponent } from './fgenerationenundzweige/die-vorgenerationen/die-vorgenerationen.component';
import { MeierEggenSchwilerSpillmannZweigComponent } from './fgenerationenundzweige/meier-eggen-schwiler-spillmann-zweig/meier-eggen-schwiler-spillmann-zweig.component';
import { RenatoZweigComponent } from './fgenerationenundzweige/renato-zweig/renato-zweig.component';
import { SchnidersViggisComponent } from './fgenerationenundzweige/schniders-viggis/schniders-viggis.component';
import { VerwantschaftlicheBeziehungenComponent } from './fgenerationenundzweige/verwantschaftliche-beziehungen/verwantschaftliche-beziehungen.component';
import { ZweigDerSphinxComponent } from './fgenerationenundzweige/zweig-der-sphinx/zweig-der-sphinx.component';
import { JahresberichtComponent } from './forganisatoirsches/jahresbericht/jahresbericht.component';
import { KontaktComponent } from './forganisatoirsches/kontakt/kontakt.component';
import { QuellenComponent } from './forganisatoirsches/quellen/quellen.component';
import { OrganisatorischesComponent } from './organisatorisches/organisatorisches.component';
import { WillkommenComponent } from './willkommen/willkommen.component';

const routes: Routes = [
  //Mainwebpages
  { path: '', component: WillkommenComponent},
  { path: 'willkommen', component: WillkommenComponent},
  { path: 'etzikenunddiedortansaessigenmueller', component: EtzikenUndDieDortAnsaessigenMuellerComponent},
  { path: 'derfamiliennamemueller', component: DerfamiliennamemuellerComponent},
  { path: 'diegenerationenundzweige', component: DieGenerationenUndZweigeComponent},
  { path: 'diewappen', component: DieWappenComponent},
  { path: 'organisatorisches', component: OrganisatorischesComponent},

  //DieGenerationenundZweige subpages
  { path: 'diegenerationenundzweige/dievorgenerationen', component: DieVorgenerationenComponent},
  { path: 'diegenerationenundzweige/dieerstenfuenfgenerationen', component: DieErstenFuenfGenerationenComponent},
  { path: 'diegenerationenundzweige/ansaessigerzweig', component: AnsaessigerZweigComponent},
  { path: 'diegenerationenundzweige/schnidersviggis', component: SchnidersViggisComponent},
  { path: 'diegenerationenundzweige/zweigdersphinx', component: ZweigDerSphinxComponent},
  { path: 'diegenerationenundzweige/amerikanischerzweig', component: AmerikanischerZweigComponent},
  { path: 'diegenerationenundzweige/meiereggenschwilerspillmannzweig', component: MeierEggenSchwilerSpillmannZweigComponent},
  { path: 'diegenerationenundzweige/renatozweig', component: RenatoZweigComponent},
  { path: 'diegenerationenundzweige/verwandtschaftlichebeziehungen', component: VerwantschaftlicheBeziehungenComponent},
  
  //DieWappen subpages
  { path: 'diewappen/daswappenvon1893', component: DasWappenVon1893Component},
  { path: 'diewappen/daswappenvon1959', component: DasWappenVon1959Component},
  { path: 'diewappen/daswappenvon1968', component: DasWappenVon1968Component},

  //Organisatorisches subpages
  { path: 'organisatorisches/kontakt', component: KontaktComponent},
  { path: 'organisatorisches/quellen', component: QuellenComponent},
  { path: 'organisatorisches/jahresbericht', component: JahresberichtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
