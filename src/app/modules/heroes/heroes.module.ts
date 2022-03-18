import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from '../../heroes/hero-list/hero-list.component';



@NgModule({
  declarations: [HeroListComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroListComponent]
})
export class HeroesModule { }
