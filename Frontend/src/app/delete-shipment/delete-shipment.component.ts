import { Component, OnInit } from '@angular/core';
import  {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-delete-shipment',
  templateUrl: './delete-shipment.component.html',
  styleUrls: ['./delete-shipment.component.scss']
})
export class DeleteShipmentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteShipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  onNoClick(Operation : boolean): void {
    this.dialogRef.close(Operation);
  }

}
