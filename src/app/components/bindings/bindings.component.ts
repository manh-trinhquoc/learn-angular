import { Component, OnInit } from '@angular/core';

import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bindings',
  template: `
    <p>{{title}}</p>
    <button (click)="liked.emit()">Like!</button>
    `
})
export class BindingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string;
  @Output() liked = new EventEmitter();

}
