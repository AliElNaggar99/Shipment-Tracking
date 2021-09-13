import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor() { }
  OpenOrClose:boolean = true;

  @Output() OpenOrCloseNav = new EventEmitter<any>();
  
  ngOnInit(): void {
  }
  

  toggle(MenuBar:any,MainPage:any,List:any){
    if(this.OpenOrClose)
      this.openNav(MenuBar,MainPage,List);
    else
      this.closeNav(MenuBar,MainPage,List);
  }

   openNav(MenuBar:any,MainPage:any,List:any) {
    MenuBar.style.width = "270px";
    MainPage.style.marginLeft = "270px";
    this.OpenOrClose = !this.OpenOrClose;
    setTimeout(()=>{
      List.style.display = "block";
    },200)
    this.OpenOrCloseNav.emit("Open");
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
   closeNav(MenuBar:any,MainPage:any,List:any) {
    List.style.display = "none";
    MenuBar.style.width = "0";
    MainPage.style.marginLeft = "0";
    this.OpenOrClose = !this.OpenOrClose;
    this.OpenOrCloseNav.emit("Close");
  }
  
}
