import { HerosFavoriteService } from './favorite-heroes/heros-favorite.service';
import { HeroService } from './hero.service';

export function heroSquadFactory(isFavorite: boolean) {
    return () => {
      if (isFavorite) {
        return new HerosFavoriteService();
      }
      return new HeroService();
    };
}