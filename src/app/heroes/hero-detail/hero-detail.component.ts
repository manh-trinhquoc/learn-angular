import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroDetailService } from './hero-detail.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroDetailService]
})
export class HeroDetailComponent implements OnInit {

  @Input() id: number;

  constructor(private heroDetaiService: HeroDetailService) { }

  private hero: Hero;
  ngOnInit(): void {
    this.hero = this.heroDetaiService.getHero(this.id);
  }

}
