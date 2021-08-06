import { Component, HostListener,Inject  } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddnumber:number[]=[];
  evennumber:number[]=[];

  title = 'demoapp';
  showbtn=false;
  logArray: number[] = [];  
  serverElements = [{type:'server',name:'testserver',content:'just is time'}];
  constructor(){
     console.log("i m the component");
  
  }
  Ondisplay(){
  
    this.showbtn= !this.showbtn;
    this.  logArray .push(this.  logArray .length + 1);
    // this.logArray .push();

  }
  onIntervalFried(FriedNumber:number){
    if(FriedNumber %2 ===0){
      this.evennumber.push(FriedNumber);
    }
    else{
      this.oddnumber.push(FriedNumber);
    }
  }
}
