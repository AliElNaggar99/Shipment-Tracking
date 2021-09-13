import { Component, ViewChild } from '@angular/core';


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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'frontend';
  myHomeData = HomeData;
  
  @ViewChild('Content') myContent: any; 

  handleNavBar(event:any){
    if(event == "Open")
        this.myContent.nativeElement.style.marginLeft = "18rem";
    else{
      this.myContent.nativeElement.style.marginLeft = "1rem";
    }
    console.log(event);
  }
}
