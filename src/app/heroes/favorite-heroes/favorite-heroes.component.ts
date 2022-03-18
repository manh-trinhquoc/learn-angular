import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/services/heroes/hero.service';

import { Hero } from '../../model/hero.model';

@Component({
  selector: 'app-favorite-heroes',
  templateUrl: './favorite-heroes.component.html',
  styleUrls: ['./favorite-heroes.component.css']
})
export class FavoriteHeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
