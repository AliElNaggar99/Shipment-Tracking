import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() icon:string ="";
  @Input() title:string ="";

  MyIcon:string = "";
  MyTitle:string ="";

  ngOnInit(): void {
    this.MyIcon=this.icon;
    this.MyTitle = this.title;
  }

}
