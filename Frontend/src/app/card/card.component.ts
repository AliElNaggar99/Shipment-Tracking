import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private myRouter : Router) { }

  @Input() icon:string ="";
  @Input() title:string ="";

  MyIcon:string = "";
  MyTitle:string ="";
  hyperlink:string = "";

  ngOnInit(): void {
    this.MyIcon=this.icon;
    this.MyTitle = this.title;
    this.hyperlink = this.MyTitle.toLowerCase();
  }
  handleClick(){
    this.myRouter.navigateByUrl(this.hyperlink);
  }

}
