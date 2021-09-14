import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


const HomeData =[{icon:"truck",title:"Shipments"},
{icon:"user",title:"Clearance Porkers"},
{icon:"building",title:"Shipping Companies"},
{icon:"warehouse",title:"Storages"},
{icon:"users",title:"Purchasing Teams"},
{icon:"parachute-box",title:"Suppliers"},
{icon:"ship",title:"Ports"},
{icon:"box-open",title:"Products"},
{icon:"file-alt",title:"Shipments Logs"},
{icon:"marker",title:"Status"},
{icon:"boxes",title:" Shipment Products"},
{icon:"dollar-sign",title:"Currencies"}
]

@Component({
  selector: 'app-home-page-cards',
  templateUrl: './home-page-cards.component.html',
  styleUrls: ['./home-page-cards.component.scss']
})
export class HomePageCardsComponent implements AfterViewInit {

  myHomeData = HomeData;
  @ViewChild('DivCards') DivCards: any;

  constructor() { }

  ngAfterViewInit(){
    for(let i = 0 ; i < this.DivCards.nativeElement.children.length ;i++)
    {
      this.DivCards.nativeElement.children[i].style.animationDelay= (0.1*i).toString() + "s";
      this.DivCards.nativeElement.children[i].children[0].style.display="block";
      
    }
  }
 

}
