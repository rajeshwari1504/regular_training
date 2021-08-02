import { Component, HostListener,Inject ,Input } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';
  constructor(){
    
  console.log("i m the component");
  
  }
}
