import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroDetailService } from './hero-detail.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroDetailService]
})
export class HeroDetailComponent implements OnInit {

  @Input() id: number;

  constructor(private heroDetaiService: HeroDetailService, 
    private route: ActivatedRoute, 
    private heroService: HeroService) { 

  }

  public hero: Hero;
  ngOnInit(): void {
    this.hero = this.heroDetaiService.getHero(this.id);
    this.getHeroObs();
    this.route.queryParamMap.subscribe(params => {
      console.log(params.get('sortOrder'));
    });
  }

  private getHeroObs() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = +params.get('id');
        return this.heroService.getHero(id);
      }),
      map(hero => this.hero = hero)
    ).subscribe();
  }

}
