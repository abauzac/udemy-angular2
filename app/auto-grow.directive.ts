
import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({ 
    selector: '[autoGrow]',
    host: {
        "(focus)" : "onFocus()",
        "(blur)" : "onBlur()"
    }
 })
export class AutoGrowDirective {
    _renderer: Renderer;
    _el: ElementRef;

    constructor(el: ElementRef, renderer: Renderer) {
        this._el = el;
        this._renderer = renderer;

     }

    onFocus(){
        this._renderer.setElementStyle(this._el.nativeElement, "width", "200px");
    }

    onBlur(){

        this._renderer.setElementStyle(this._el.nativeElement, "width", "100px");
    }
}