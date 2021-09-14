import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewModel } from '../interfaces/ViewModel';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss'],
  providers:[ViewModel]
})
export class InputDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private myViewModel:ViewModel) {
    }


    Attrs = (this.myViewModel.ViewModelObject as any)[this.data.DataDB];
    InputNames = (this.myViewModel.ViewModelObject as any) [this.data.DataDBNames];

    

  ngOnInit(): void {
  
   
  }

  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
