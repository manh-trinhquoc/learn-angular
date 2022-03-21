import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';  //angular-in-memory-web-api

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return {
      heroes: [
        { id: 1, name: '3 Boothstomper' },
        { id: 2, name: '2 Drogfisher' },
        { id: 3, name: '1 Bloodyllips' },
        { id: 4, name: '4 Mr Bu Moverse' },
        { id: 5, name: '5 Piranhaelli' }
      ]
    };
  }
}
