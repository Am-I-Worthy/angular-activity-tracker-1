import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{
  color = 'black';
  public element = "";
  public todoel = [];
  public todoCheckColor = [];
  public todoCheckDec = [];
  public show = (this.todoel.length == 0) ? true : false;
  public showList = (this.todoel.length == 0) ? false : true;
  onClick(){
    if(this.element.length != 1 && this.element.length != 0){
    this.todoel.push(this.element);
    this.todoCheckColor.push('black');
    this.todoCheckDec.push('none');
    this.show = false;
    this.element = " ";
    }
  }
  onClear(){
    this.todoel = [];
    this.show = true;
  }
  onCheck(value){
    var inde = this.todoel.indexOf(value);
    if(this.todoCheckColor[inde] == 'black'){
      this.todoCheckColor[inde] = 'red';
      this.todoCheckDec[inde] = 'line-through'
    }else{
      this.todoCheckColor[inde] = 'black';
      this.todoCheckDec[inde] = 'none'
    }
    this.color = 'red';
  }
}