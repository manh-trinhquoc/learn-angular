import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../services/heroes/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: any;

  constructor(private heroService: HeroService) {   }

  ngOnInit(): void {
    
    this.heroes = this.heroService.getHeroes();
  }

}
