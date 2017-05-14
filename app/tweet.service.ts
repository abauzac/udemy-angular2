import { Injectable } from '@angular/core';

@Injectable()
export class TweetService {

    constructor() { }


    getTweets(): Tweet[] {

        return [{
            authorName: "windward",
            authorId: "windwardstudios",
            content: "looking for better comp",
            countLikes: 1,
            imageUrl: "http://lorempixel.com/100/100/people?" + Math.random()
        }, {
            authorName: "angular news",
            authorId: "angularjs",
            content: "right relevance: influences article & conv",
            countLikes: 0,
            imageUrl: "http://lorempixel.com/100/100/people?" + Math.random()
        }, {
            authorName: "ux bootstrap",
            authorId: "3rdstudios",
            content: "10 reasons why fail",
            countLikes: 10,
            imageUrl: "http://lorempixel.com/100/100/people?" + Math.random()
        },]
    }
}

type Tweet = {
    imageUrl?: string,
    authorName?: string,
    authorId?: string,
    content?: string,
    countLikes?: number,
}