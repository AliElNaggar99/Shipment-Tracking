import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'frontend';
 
  
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
