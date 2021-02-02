import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FoterComponent } from './components/foter/foter.component';
import { IniComponent } from './components/ini/ini.component';
import { PrinciComponent } from './components/princi/princi.component';
import { GastroComponent } from './components/gastro/gastro.component';
import { routing } from './app.routing';
import { PrvinComponent } from './components/prvin/prvin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoterComponent,
    IniComponent,
    PrinciComponent,
    GastroComponent,
    PrvinComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
