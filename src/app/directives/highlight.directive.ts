import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector : '[app-highlight]'
})
export class HighlightDirective{

    @Input('defaultColor') defaultColor : string;
    @HostBinding('style.background-color') bgColor : any;

    @HostListener('mouseenter') 
    onmouseenter(){
        // this.bgColor = "darkgrey";
        this.bgColor = this.defaultColor;
    }

    @HostListener('mouseleave') 
    onmouseleave(){
        this.bgColor = "transparent";
    }

    constructor(private elRef : ElementRef){
        // console.log(this.elRef.nativeElement);
        // this.elRef.nativeElement.style.backgroundColor = "lightgrey";
    }

}