import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';

import { SortPipe } from './pipes/sort.pipe';
import { CopyrightDirective } from './directives/copyright.directive';
import { NumericDirective } from './directives/numeric.directive';
import { PermissionDirective } from './directives/permission.directive';

import { HeroesModule } from './modules/heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent,
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ],
  imports: [
    BrowserModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
