import { Component, Input } from '@angular/core';

@Component({
    selector: 'like',
    templateUrl: 'app/like.component.html',
    styles: [`
    .glyphicon-heart{
        cursor:pointer;
    }
    
    `]
})

export class LikeComponent  {
    @Input() counter = 10;
    @Input() isLiked = false;
    
    constructor() { }

    onClick() {
        this.isLiked = !this.isLiked;
        this.isLiked == true ? this.counter++ : this.counter--;
    }    
}