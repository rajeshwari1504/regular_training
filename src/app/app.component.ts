import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
//   @ViewChild('f') anyname!:NgForm
//   // defaultQuestion='frist Name';
//   answer='';
//   genders=['male','female'];
//   user={
//     User:'',
//     email:'',
//     QuestionAswer:'',
//     gender:''

// }
// submitted=false;
//  oddnumber: number[] = [];
//   evennumber: number[] = [];
//   combined: number[] = [];
//   value = 10;

//   title = 'demoapp';
//   showbtn = false;
//   logArray: number[] = [];
//   serverElements = [{ type: 'server', name: 'testserver', content: 'just is time' }];
  // constructor() {
  //   console.log("i m the component");

  // }
  // sugestNmae(){
  //   const suggestNmae='superuser';
    // this.anyname.setValue({
    //   userData:{
    //     UserName:suggestNmae,
    //     email:''
    //   },
    //   gender:''
    // })
    // this.anyname.form.patchValue({
    //     userData:{
    //       UserName:suggestNmae,
    //       // email:suggestNmae,
    //       }
    //   })
  
  // Ondisplay() {

  //   this.showbtn = !this.showbtn;
  //   this.logArray.push(this.logArray.length + 1);
  //   // this.logArray .push();

  // }
  // onIntervalFried(FriedNumber: number) {
  //   this.combined.push(FriedNumber);
  //   console.log(this.combined)
    // if (FriedNumber % 2 === 0) {
    //   this.evennumber.push(FriedNumber); 2,4,6,8
    // }
    // else if (FriedNumber % 2 !== 0) {
    //   this.oddnumber.push(FriedNumber); 1,3,5,7
    //   console.log(this.evennumber); console.log(this.oddnumber);
    // }
    // let result = this.evennumber.concat(this.oddnumber); 2,4,6,8,1,3,5,7
    // //this.combined = result.sort();
    // this.combined = result.sort((n1, n2) => n1 - n2); 1,2,3,4,5,6,7
    // console.log(this.combined);
  // }
  // checkNumber(FriedNumber: number): any {
  //   if (FriedNumber % 2 === 0) {
  //     return "even";
  //   }
  //   else if (FriedNumber % 2 !== 0) {
  //     return "odd";
  //   }
  // }
  // OnSelect(){
  //   this.submitted=true
  //   // console.log(this.anyname)
  //   // console.log(this.user)
  //   this.user.User=this.anyname.value.userData.UserName;
  //   this.user.email=this.anyname.value.userData.email;
  //   this.user.QuestionAswer=this.anyname.value.userData.QuestionAswer;
  //  this.user.gender=this.anyname.value.userData.gender;
  //  this.anyname.reset();
  // }
  singupFrom !: FormGroup  ;
  genders=['male','female'] 
 
  constructor(){ }
    ngOnInit(){
      this.singupFrom= new FormGroup({
        'fname': new FormControl(null),
        'email': new FormControl(null),
        'gender': new FormControl('female')
      })
    }
  }