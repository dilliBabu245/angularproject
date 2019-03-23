import {Directive,ElementRef, HostListener} from '@angular/core';
@Directive(
{
selector:'[mano]'
})
export class customDirective
{
    constructor(el:ElementRef)

{
el.nativeElement.style.background="yellow";
el.nativeElement.style.padding="20px";
el.nativeElement.style.border="2px solid red";
}
@HostListener('mouseenter')mouseEnter()
{
console.log("mouse entered")
}
@HostListener("mouseleave")mouseLeave(){
    console.log('mouse leave')
}
@HostListener('click')clickData()
{
    console.log("manu is clicked");
}}

