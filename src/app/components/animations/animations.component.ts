import { Component, OnInit } from '@angular/core';


import { AnimationFactory, AnimationPlayer, trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

import { AnimationBuilder } from '@angular/animations';
import { ElementRef } from '@angular/core';

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

  constructor(private builder: AnimationBuilder, private el: ElementRef) { }

  ngOnInit(): void {
    const factory: AnimationFactory = this.builder.build([
      style({ width : '0px' }),
      animate(2000, style({ width: '500px' }))
    ]);

    const textEl = this.el.nativeElement.querySelector('.text');
    const player: AnimationPlayer = factory.create(textEl);
    player.play();
  }

  started(evt: AnimationEvent) {
    console.log('Animation started');
  }
  finished(evt: AnimationEvent) {
    console.log('Animation finished');
  }

}
