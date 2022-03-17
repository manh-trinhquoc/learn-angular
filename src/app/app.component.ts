import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello angular 10';
  description = "heelo world";
  today = new Date();
  hero = {
    names: {
      name: 'Boothstomper',
      realName: 'Alfie Best'
    },
    planet: 'Earth',
    color: 'cyan'
  };

}
