import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortPipe } from './sort.pipe';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes4/heroes.component';
import { Heroes2Component } from './heroes2/heroes2.component';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    HeroComponent,
    Heroes2Component,
    // HeroesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
