import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

const heroes = ['Boothstomper', 'Drogfisher', 'Bloodyllips', 'Mr Bu Moverse', 'Piranhaelli'];

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor() { }

  getData(): Observable<string[]> {
    return of (heroes).pipe(delay(2500));
  }
}
