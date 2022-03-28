import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AuthGuard } from './guards/auth.guard';

import { PreloadAllModules } from '@angular/router';

import { CustomPreloadingService } from './services/custom-preloading.service';

const routes: Routes = [
  { path: 'about',
    loadChildren: () => import('../app/modules/about/about.module').then(m => m.AboutModule),
    canLoad: [AuthGuard],
    data: { preload: true }

  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
    preloadingStrategy:       CustomPreloadingService,
    // enableTracing: true
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }