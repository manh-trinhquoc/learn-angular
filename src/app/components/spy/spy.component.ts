import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spy',
  template: '{{caption}}'
})
export class SpyComponent implements OnInit {

  caption: string;
  constructor(private title: Title) { }
  ngOnInit() {
    this.title.setTitle('My Angular app 2');
    this.caption = this.title.getTitle();
  }

}
