import { Injectable } from '@angular/core';
import { HeroService } from 'src/services/heroes/hero.service';
import { Hero } from '../hero.model';

@Injectable()
export class HeroDetailService {

  constructor(private heroService: HeroService) { }

  private hero: Hero;

  getHero(id: number) {
    let heroes = this.heroService.getHeroes();
    if (!this.hero) {
      this.hero = heroes.find(hero => hero.id === id);
    }
    return this.hero;
  }
}
