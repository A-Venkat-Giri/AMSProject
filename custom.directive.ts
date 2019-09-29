import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private elementRef:ElementRef) {
    //elementRef.nativeElement.style.background='red';
    elementRef.nativeElement.style.color='white';
    elementRef.nativeElement.style.padding='60px';

   }
   @HostBinding("style.background")background;
   @HostListener('mouseenter') changecolor()
   {
this.background='red';
  //    this.elementRef.nativeElement.style.background='red';
  //    this.elementRef.nativeElement.style.color='white';
  //    this.elementRef.nativeElement.style.fontsize='28px';
   }
   @HostListener('mouseleave') changecolor1()
   {
     this.background='lightblue'
    //  this.elementRef.nativeElement.style.background='lightblue';
    //  this.elementRef.nativeElement.style.color='green';
    //  this.elementRef.nativeElement.style.fontsize='10px';
   }
}
