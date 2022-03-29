import { Component, OnInit } from '@angular/core';


import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('sizeAnimation', [
      state('small', style({
        transform:'scale(1)',
        backgroundColor: 'green'
      })),
      state('large', style({
        transform: 'scale(1.4)',
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center'
      })),
      transition('small => large', animate('100ms ease-in')),
      transition('large => small', animate('100ms ease-out'))
    ])
  ]
})
export class AnimationsComponent implements OnInit {

  state: string;

  constructor() { }

  ngOnInit(): void {
  }

}
