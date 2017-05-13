import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: "app/favorite.template.html",
    styles: [`
    
    .glyphicon-star{
        color:orange;
    }
    `]
})

export class FavoriteComponent {
    @Input()
    isFavorite = false;

    @Output()
    change = new EventEmitter()

    constructor() { }


    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newvalue: this.isFavorite });
    }

}