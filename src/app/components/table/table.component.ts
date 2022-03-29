import { Component, OnInit } from '@angular/core';

import { heroes } from 'src/app/heroes';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes = heroes;

  columnNames = ['id', 'name'];

}
