import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
// import { interval } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() intervalFried=new EventEmitter<number>();
  //  @Input() number:any
  interval:any;
  lastNumber=0;
  constructor() { }

  ngOnInit(): void {
  }
  onstartInvent(){
   this.interval=setInterval(()=>{
   this.intervalFried.emit(this.lastNumber +1);
   this.lastNumber++;
   },1000);
  }
  onpauseIvent(){
    clearInterval(this.interval);
  }
}
