import { Component, OnInit } from '@angular/core';

import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-invisible',
  templateUrl: './invisible.component.html',
  styleUrls: ['./invisible.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(200%)'}))
      ])
    ])
  ]
})
export class InvisibleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  state: string;
  showMe: boolean;
  appear() {
    this.state = 'in';
    this.showMe = true;
  }
  disappear() {
    this.showMe = false;
  }

}
