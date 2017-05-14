import { Component } from '@angular/core';
import { TweetService } from "./tweet.service";


// control the entire page
@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",
})
export class AppComponent {
  tweets = [];

  post = {
    title: "my title",
    isFavorite: false
  }

  onFavoriteChange($event) {
    console.log($event);
  }

  constructor(tweetService: TweetService) {
    this.tweets = tweetService.getTweets();
  }

 }
