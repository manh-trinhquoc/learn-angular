import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { AuthGuard } from '../guards/auth.guard';
import { ConfirmGuard } from '../guards/confirm.guard';

import { HeroDetailResolverService } from '../services/hero-detail-resolver.service'

const routes: Routes = [
  { 
    path: 'heroes', 
    component: HeroListComponent,
    children: [
      { path: ':id', component: HeroDetailComponent },
    ] 
  },
  { path: 'hero/:id',
    component: HeroDetailComponent,
    canActivate: [AuthGuard],
    canDeactivate: [ConfirmGuard],
    resolve: {
      hero: HeroDetailResolverService
    }
  },
  { path: 'hero', 
    component: HeroDetailComponent   
  },
  // { path: '', component: HeroListComponent }
  { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
