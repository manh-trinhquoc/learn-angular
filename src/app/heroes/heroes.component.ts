import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [
    { id: 1, name: '3 Boothstomper', team: '4 avengers' },
    { id: 2, name: '2 Drogfisher', team: '5 avengers' },
    { id: 3, name: '1 Bloodyllips', team: '3 villains' },
    { id: 4, name: '4 Mr Bu Moverse', team: '2 villains' },
    { id: 5, name: '5 Piranhaelli', team: '1' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }

}
