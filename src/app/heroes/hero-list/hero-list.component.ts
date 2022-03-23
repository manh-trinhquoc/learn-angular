import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

import { Hero } from '../hero.model';

import { Subscription } from 'rxjs';

import { Subject } from 'rxjs';

import { takeUntil } from 'rxjs/operators';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  viewProviders: [HeroService]
})
export class HeroListComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  // private heroSub: Subscription;

  private heroSub = new Subject();

  heroes: Hero[];

  constructor(private heroService: HeroService) {   }

  ngOnInit(): void {
    // this.heroes = this.heroService.getHeroes();
    this.getHeroes();
  }

  ngOnDestroy() {
    // this.heroSub.unsubscribe();
    this.heroSub.next();
    this.heroSub.complete();
  }
  
  private getHeroes(){
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    // this.heroSub = this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.heroService.getHeroes().pipe(      
      map(heroes => this.heroes = heroes),
      takeUntil(this.heroSub)
    ).subscribe();
    this.heroes$ = this.heroService.getHeroes();
  }

  add(name: string) {
    this.heroService.createHero(name).subscribe(hero =>     this.heroes.push(hero));
    // this.heroService.createHero(name).subscribe(hero =>     console.log(hero));
  }

  rename(hero: Hero) {
    const existingHero = { id: hero.id, name: 'Pricezog' };
    this.heroService.editHero(hero.id, existingHero).subscribe(() => {
      this.heroes.find(hero => hero.id).name = 'Pricezog';
    });
  }

  remove(hero: Hero) {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroes.filter(selected => selected !== hero);
    });
  }

}
