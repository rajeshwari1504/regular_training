import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  serverId:number=10;
  serverstatus:String="offline";
  allowNewserver=false;
  servercreaternew = 'no server is created!';
  serverName='test';
  servercreatename=false;
  server=['testserver','testserver 2'];
  getserverstatus(){
     return this.serverstatus ;   
  }
  constructor() { 
    setTimeout(() => {
      this.allowNewserver= true;
      let random = Math.random()
      console.log(random);
       console.log(this.serverstatus= random> 0.5?'online':'offline');
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateserver(){
    this.servercreatename=true;
    this.server.push(this.serverName)
     this.servercreaternew ='server is created!';
  }
  // onupdateserver(event :Event){
  //    this.serverName =(<HTMLInputElement>event.target).value;
  // }
  getclr(){
    return this.serverstatus === 'online' ? 'green' :'red' ;
  }
}
