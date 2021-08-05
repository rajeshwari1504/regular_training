import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
// interface Eletype {
//   type: string, name: string,content: string}

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
   userName ='';
  //  [element: string]:Eletype
  constructor() { }

  //  ngOnChanges(Changes :SimpleChanges){
  //   console.log("onchanges call is");
  //   console.log(Changes);
  // }

  ngOnInit(): void {
    console.log("oninti");
  }
//  ngDoCheck(){
//  console.log("do check it");
//  }
//  ngAfterContentInit(){
//    console.log("after content init")
//  }
//  ngAfterContentChecked(){
//  console.log("after content check")
//  }
//  ngAfterViewInit(){
//   console.log("after view inticheck")
//   }
//   ngAfterViewChecked(){
//     console.log("afterview content check")
//     }
}
