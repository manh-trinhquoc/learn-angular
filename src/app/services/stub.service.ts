import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StubService {

  constructor() { }
  name: string;
  isBusy: boolean;
}
