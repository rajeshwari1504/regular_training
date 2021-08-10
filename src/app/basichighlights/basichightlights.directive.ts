import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive(
    {
        selector:'[appBasichights]'
    }
)
export class BasichightlightsDirective implements OnInit{
    constructor( private elementref:ElementRef){
    }
    ngOnInit(){
    this.elementref.nativeElement.style.backgroundColor='green';
    }
}