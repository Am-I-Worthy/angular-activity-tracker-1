import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{
  public element = "hello";
  public colr = [];
  public show = (this.colr.length == 0) ? true : false;
  public showList = (this.colr.length == 0) ? false : true;
  onClick(){
    if(this.element.length != 1){
    this.colr.push(this.element);
    this.show = false;
    this.element = " ";
    }
  }
  onClear(){
    this.colr = [];
    this.show = true;
  }
}