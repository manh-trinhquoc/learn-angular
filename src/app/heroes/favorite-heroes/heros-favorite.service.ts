import { Injectable } from '@angular/core';
import { Hero } from 'src/app/model/hero.model';
import { HeroService } from 'src/services/heroes/hero.service';

@Injectable({
  providedIn: 'root'
})
export class HerosFavoriteService extends HeroService {

  constructor() {
    super();
   }

   getHeroes(): Hero[] {
       return super.getHeroes().slice(0, 3);
   }
}
