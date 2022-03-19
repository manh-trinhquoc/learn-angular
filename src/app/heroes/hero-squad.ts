import { HerosFavoriteService } from './favorite-heroes/heros-favorite.service';
import { HeroService } from '../../services/heroes/hero.service';

export function heroSquadFactory(isFavorite: boolean) {
    return () => {
      if (isFavorite) {
        return new HerosFavoriteService();
      }
      return new HeroService();
    };
}