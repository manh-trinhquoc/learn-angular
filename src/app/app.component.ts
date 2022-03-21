import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello angular 10 initial title';
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

  private setTitle = () => {
    // this.title = 'Hello Angular 10 setTittle';
    const timestamp = new Date().getMilliseconds();
    this.title = `Hello Angular 10 (${timestamp})`;
   
  }

  private changeTitle(callback) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  constructor() {
    // this.changeTitle(this.setTitle);
    this.onComplete().then(this.setTitle);
    this.title$.subscribe(this.setTitle);
  }

  private onComplete() {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      //   resolve();
      // }, 2000);
      setInterval(() => {
        resolve(null);
      }, 2000);
    });
  }

  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

}
