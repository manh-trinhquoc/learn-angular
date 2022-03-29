import { AnimationBuilder } from '@angular/animations';
import { Directive, ElementRef } from '@angular/core';

import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private builder: AnimationBuilder, private el: ElementRef) { }

  ngOnInit() {
    const animation = this.builder.build([
      style({ width: '0', backgroundColor:'blue' }),
      animate(3000, style({ width : '200px', backgroundColor:'red' }))
    ]);
    const player = animation.create( this.el.nativeElement );
    player.play();
  }
}
