import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroDetailComponent } from '../heroes/hero-detail/hero-detail.component';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<HeroDetailComponent> {
  canDeactivate(
    component: HeroDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    return this.showConfirm();
  }

  private showConfirm(): Observable<boolean> {
    const confirmation = window.confirm('Are you sure?');
    return of(confirmation);
  }
  
}
