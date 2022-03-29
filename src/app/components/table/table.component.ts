import { Component, OnInit } from '@angular/core';

import { heroes } from 'src/app/heroes';

import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes = new MatTableDataSource(heroes);;

  columnNames = ['id', 'name'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

}
