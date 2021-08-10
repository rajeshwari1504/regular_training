import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {
  @Input()defaultColor:string='transparent'
  @Input()highlightColor:string='blue';

  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;

  constructor(private eleref:ElementRef,private rendere:Renderer2) {

   }
ngOnInit(){
// this.rendere.setStyle(this.eleref.nativeElement,'background-color','blue')
}
@HostListener('mouseenter') mouseover(eventdata:Event){
  // this.rendere.setStyle(this.eleref.nativeElement,'background-color','blue')
//  this.backgroundColor='red';
this.backgroundColor=this.highlightColor
}
@HostListener('mouseleave') mouseleave(eventdata:Event){
  // this.rendere.setStyle(this.eleref.nativeElement,'background-color','transparent')
// this.backgroundColor='transparent'
this.backgroundColor=this.defaultColor
}
}
