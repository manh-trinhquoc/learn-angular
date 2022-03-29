import { Component, OnInit } from '@angular/core';
import { StubService } from '../../services/stub.service';

@Component({
  selector: 'app-stub',
  template: "<span>{{msg}}<span>",
})
export class StubComponent implements OnInit {

  constructor(private stub: StubService) { }

  ngOnInit(): void {
    this.msg = !this.stub.isBusy
      ? this.stub.name + ' is available'
      : this.stub.name + ' is on a mission';
  }

  msg: string;

}
