import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { heroes } from '../../heroes';
import { Hero } from '../../heroes/hero.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { moveItemInArray } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
  
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.filteredHeroes$ = this.name.valueChanges.pipe(map(name => this.heroes.filter(hero => hero.name.startsWith(name)))
    );
  }

  name = new FormControl('', Validators.required);

  heroes = heroes;

  filteredHeroes$: Observable<Hero[]>;

  isChecked: boolean;

  reorder(event: CdkDragDrop<Hero[]>) {
    moveItemInArray(this.heroes, event.previousIndex, event.currentIndex);
  }

  isBeating: boolean = true;

}
