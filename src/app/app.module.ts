import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';

import { SortPipe } from './pipes/sort.pipe';
import { CopyrightDirective } from './directives/copyright.directive';
import { NumericDirective } from './directives/numeric.directive';
import { PermissionDirective } from './directives/permission.directive';

import { HeroesModule } from './heroes/heroes.module';
import { KeyLoggerComponent } from './components/key-logger/key-logger.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';




@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent,
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
    KeyLoggerComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)
    // environment.production ? HttpClientInMemoryWebApiModule.forRoot(DataService) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
