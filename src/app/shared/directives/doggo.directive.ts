import { Directive, ElementRef, Input, OnChanges } from "@angular/core";

@Directive({
    selector: '[doggoDirective]',
})
export class DoggoDirective implements OnChanges {

    @Input() doggoDirective?: boolean;

    constructor(private el: ElementRef) {}

    ngOnChanges(): void {
        if (this.doggoDirective){
            this.el.nativeElement.style.backgroundColor = "#a4eb88";
        } else {
            this.el.nativeElement.style.backgroundColor = "white";
        }
    }
}