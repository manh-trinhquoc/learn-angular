import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes (): Hero[] {
    return [
      
    ];
  }
}
