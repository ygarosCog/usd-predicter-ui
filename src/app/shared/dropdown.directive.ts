import { Directive, ElementRef, Renderer2, OnInit ,HostListener, HostBinding } from '@angular/core'

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective {
    @HostBinding("class.open") isOpen = false;
    constructor(private element: ElementRef){
    }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.element.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
}