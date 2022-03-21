import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]

  constructor() { }

  ngOnInit(): void {
    
  }

  trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }

}
