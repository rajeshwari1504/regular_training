import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
private servers :{id:number,name:string,status:string}[]=[]
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  Reload(){
    this.router.navigate(['/server'],{relativeTo:this.route});
  }
}
