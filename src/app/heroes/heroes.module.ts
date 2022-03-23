import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
// import { FavoriteHeroesComponent } from './favorite-heroes/favorite-heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  // declarations: [HeroListComponent, FavoriteHeroesComponent, HeroDetailComponent],
  declarations: [HeroListComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  exports: [HeroListComponent]
})
export class HeroesModule { }
