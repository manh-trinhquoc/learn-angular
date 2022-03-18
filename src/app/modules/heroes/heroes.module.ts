import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from '../../heroes/hero-list/hero-list.component';
import { FavoriteHeroesComponent } from '../../heroes/favorite-heroes/favorite-heroes.component';
import { HeroDetailComponent } from '../../heroes/hero-detail/hero-detail.component';



@NgModule({
  declarations: [HeroListComponent, FavoriteHeroesComponent, HeroDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroListComponent]
})
export class HeroesModule { }
