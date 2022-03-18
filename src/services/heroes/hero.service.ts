import { Injectable } from '@angular/core';
import { Hero } from '../../app/model/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes (): Hero[] {
    return [
      { id: 1, name: '3 Boothstomper' },
      { id: 2, name: '2 Drogfisher' },
      { id: 3, name: '1 Bloodyllips' },
      { id: 4, name: '4 Mr Bu Moverse' },
      { id: 5, name: '5 Piranhaelli' }
    ];
  }
}
