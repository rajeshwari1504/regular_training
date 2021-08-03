import { Component, HostListener,Inject ,Input } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';
  showbtn=false;
  logArray: number[] = [];  
   
  constructor(){
     console.log("i m the component");
  
  }
  Ondisplay(){
  
    this.showbtn= !this.showbtn;
    this.  logArray .push(this.  logArray .length + 1);
    // this.logArray .push();

  }
}
