
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { count } from 'console';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  private firstObsSubcribe!:Subscription;

  constructor(private router:Router) { }

  ngOnInit() {
       this.firstObsSubcribe = interval(1000).subscribe(count => {
      console.log(count)  })
      // let count=0;
      // const customintervalObservable=Observable.create((observer: { next: any; }) =>{
      //   setInterval(hanlder: () => {
      //     observer.next(count);
      //     count++
            
      //       if(count >3){
      //         observer.error(new Error(message:'count is greater is 3!'));
              
      //       }
      //   },1000)
      // })
      // this.firstObsSubcribe=customintervalObservable.subscribe( (_data: any) =>{
      //  console.log(_data);
      // })
  }
  ngOnDestroy(){
    this.firstObsSubcribe.unsubscribe()
  }
  onLoadServer(){
    this.router.navigate(['server']);
  
  }
  // demoApp() {
  //   var name="rajeshwari"
  //   console.log(name);
  // }
  // demoApp() {
  //   var a=4;
  //   let name="rajeshwari"
  //   if(a%2==0){
  //     var b=4;
  //   let name="rajeshwari"
  //   }console.log(name);
  // } 
  // demoApp() {
  //     const name="rajeshwari"
  //    name="gddbchyd";
  //   } console.log(name);
}
function hanlder(hanlder: any, arg1: () => void, arg2: number) {
  throw new Error('Function not implemented.');
}

