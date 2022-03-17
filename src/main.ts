import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

enum StackingIndex {
  None = 0,
  Dropdown = 1000,
  Overlay = 2000,
  Modal = 3000
};
const mySelectBoxStacking: StackingIndex = StackingIndex.Dropdown;
console.log(mySelectBoxStacking);


enum Brands { Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge};
const myCarBrandName: string = Brands[1];
console.log(myCarBrandName);


function delayedGreeting(name): void {
  this.name = name;
  this.greet = function(){
    console.log('Hello  outside ' + this.name);
      setTimeout(function() {
          console.log('Hello ' + this.name);
      }, 0);

      setTimeout(() =>
          console.log('Hello arrow ' + this.name)
      , 0);
  }
}
const greeting = new delayedGreeting('John');
greeting.greet();




function method<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

class CustomPerson extends Array {}
class Person {}

const people: Person[] = [];
const newPerson = new CustomPerson();

method<Person>(people);
method<CustomPerson>(newPerson);

interface Shape {
  area(): number;
}

class Square implements Shape {
  area() { return 1; }
}
class Circle implements Shape {
  area() { return 2; }
}
function allAreas<T extends Shape>(...args: T[]): number {
  let total = 0;
  args.forEach (x => {
      total += x.area();
  });
  return total;

}
allAreas ( new Square(), new Circle() );

class Car {
  private distanceRun: number = 0;
  private color: string;

  constructor(private isHybrid: boolean, color: string =   'red') {
      this.color = color;
  }
  getGasConsumption(): string {
    return this.isHybrid ? 'Very low' : 'Too high!';
  }

  drive(distance: number): void {
      this.distanceRun += distance;
  }

  static honk(): string {
      return 'HOOONK!';
  }
  get distance(): number {
      return this.distanceRun;
  }
}


interface DatabaseService {
  save(order: Order): void
}

class Order {}
class OrderProcessor {
  constructor(private databaseService: DatabaseService) {}
  process(order) {
    this.databaseService.save(order);
  }
}

class CDatabaseService implements DatabaseService {
  save(order: Order): void {
      console.log('save order');
  }
}
// let orderProcessor = new OrderProcessor(mockLibrary.mock<DatabaseService>());
// const databaseServiceInstance = <DatabaseService>{};
const databaseServiceInstance = new CDatabaseService();
let orderProcessor = new OrderProcessor(databaseServiceInstance);
orderProcessor.process(new Order());

interface AuthService {
  isAuthenticated(): boolean;
}
class Stuff {
  constructor(private srv:AuthService) {}
  execute() {
      if (this.srv.isAuthenticated()) {}
      else {}
  }
}


class MockAuthService implements AuthService {
  isAuthenticated() { return true; }
}
const srv = new MockAuthService();
const stuff = new Stuff(srv);

