import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddnumber: number[] = [];
  evennumber: number[] = [];
  combined: number[] = [];
  value = 10;

  title = 'demoapp';
  showbtn = false;
  logArray: number[] = [];
  serverElements = [{ type: 'server', name: 'testserver', content: 'just is time' }];
  constructor() {
    console.log("i m the component");

  }
  Ondisplay() {

    this.showbtn = !this.showbtn;
    this.logArray.push(this.logArray.length + 1);
    // this.logArray .push();

  }
  onIntervalFried(FriedNumber: number) {
    if (FriedNumber % 2 === 0) {
      this.evennumber.push(FriedNumber);
    }
    else if (FriedNumber % 2 !== 0) {
      this.oddnumber.push(FriedNumber);
      console.log(this.evennumber); console.log(this.oddnumber);
    }
    let result = this.evennumber.concat(this.oddnumber);
    //this.combined = result.sort();
    this.combined = result.sort((n1, n2) => n1 - n2);
    console.log(this.combined);
  }
  checkNumber(FriedNumber: number): any {
    if (FriedNumber % 2 === 0) {
      return "even";
    }
    else if (FriedNumber % 2 !== 0) {
      return "odd";
    }
  }

}

