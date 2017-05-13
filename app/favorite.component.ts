

import { Component } from '@angular/core';

@Component({
    selector: 'favorite',
    template: `
    <div>
        <i class="glyphicon" (click)="onClick()" 
        [class.glyphicon-star]="isFavorite"
        [class.glyphicon-star-empty]="!isFavorite" ></i>
    </div>
    `
})

export class FavoriteComponent  {
    isFavorite = false;

    constructor() { }

    onClick() {
        this.isFavorite = !this.isFavorite;
    }

}