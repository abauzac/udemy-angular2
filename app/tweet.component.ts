/// <reference path="./tweet.service.ts" />

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.component.html',
    styles: [`
        .media{
            margin: 10px;
        }

    `]
})

export class TweetComponent implements OnInit {
    
    @Input() tweet: Tweet;
    
    constructor() { }

    ngOnInit() { }
}


type Tweet = {
    imageUrl?: string,
    authorName?: string,
    authorId?: string,
    content?: string,
    countLikes?: number,
}