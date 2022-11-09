import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMoveBackground]'
})
export class MoveBackgroundDirective {

  constructor(private element: ElementRef,
    private renderer: Renderer2) { }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e: MouseEvent){
    // console.log(this.element.nativeElement);
    // console.log(e);
    const x = e.screenX;
    const y = e.screenY;
    const translate = "translate(" + ( x / 200 ) + "px, " + ( y / 200 ) + "px)";
    const domElement = this.element.nativeElement;
    this.renderer.setStyle(
      domElement, "transform", translate
    );
  }
  
  // transform: translate(0px, 0px);

}
