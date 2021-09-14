import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



interface Animal {
  name: string;
  id: number;
}

@Component({
  selector: 'app-dropdownmenu',
  templateUrl: './dropdownmenu.component.html',
  styleUrls: ['./dropdownmenu.component.scss']
})

export class DropdownmenuComponent implements OnInit {

  @Input() IDName:string ="";
  @Input() Name:string = "";
  @Input() title:string = "";
  @Input() CurrentSelect:any = "";
  @Input() List:[]=[];
  @Input() attriName : string = "";
  @Output() NewSelect = new EventEmitter<any>() ;

  myTitle = "";
  myCurrentSelected:any;
  myList:[] =[];
  myID="";
  myName="";
  myAttriName="";
  constructor() { }

  ngOnInit(): void {
    this.myTitle = this.title;
    this.myCurrentSelected=this.CurrentSelect;
    this.myList = this.List;
    this.myID=this.IDName;
    this.myName=this.Name;
    this.myAttriName=this.attriName;
  }

  ngOnChanges() {
    this.myList = this.List;
  }

  ChangeOut(event :any){
    let object = {attrName:this.myAttriName , newID:event}
    this.NewSelect.emit(object);
  }

}
