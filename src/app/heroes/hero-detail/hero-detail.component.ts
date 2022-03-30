import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { HeroDetailService } from './hero-detail.service';

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
