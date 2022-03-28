import { Component, inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(data?: boolean) {
    this.dialogRef.close(data);
  }

}
