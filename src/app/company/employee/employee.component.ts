import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  serverId:number=10;
  serverstatus:String="offine";
  allowNewserver=false;
  servercreaternew = 'no server is created!';
  serverName='';
  getserverstatus(){
     return this.serverstatus ;   
  }
  constructor() { 
    setTimeout(() => {
      this.allowNewserver= true;
      
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateserver(){
     this.servercreaternew ='server is created!';
  }
  onupdateserver(event :Event){
     this.serverName =(<HTMLInputElement>event.target).value;
  }

}
