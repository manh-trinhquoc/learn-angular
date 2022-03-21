import { Component, Host, OnInit, Optional } from '@angular/core';
import { HeroService } from 'src/services/heroes/hero.service';
import { HerosFavoriteService } from './heros-favorite.service';
import { heroSquadFactory } from '../hero-squad'

import { Hero } from '../hero.model';

@Component({
  selector: 'app-favorite-heroes',
  templateUrl: './favorite-heroes.component.html',
  styleUrls: ['./favorite-heroes.component.css'],
  providers:[{
    provide: HeroService,
    // useClass: HerosFavoriteService
    useFactory: heroSquadFactory(false)
  }]
})
export class FavoriteHeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(@Host() @Optional()  private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
