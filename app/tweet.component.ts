/// <reference path="./tweet.service.ts" />

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.component.html',
    styles: [`
        .media{
            margin: 10px;
        }

        .glyphicon-heart{
            cursor:pointer;
            color: gray;
        }

        .glyphicon-heart--liked{
            color: deeppink;
        }
    `]
})

export class TweetComponent implements OnInit {
    
    @Input() tweet: Tweet;
    isLiked = false;
    
    constructor() { }

    onLikeClick() {
        this.isLiked = !this.isLiked;
        this.isLiked ? this.tweet.countLikes++ : this.tweet.countLikes--;
    }

    ngOnInit() { }
}


type Tweet = {
    imageUrl?: string,
    authorName?: string,
    authorId?: string,
    content?: string,
    countLikes?: number,
}