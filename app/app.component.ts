import { Component } from '@angular/core';
import { TweetService } from "./tweet.service";


// control the entire page
@Component({
  selector: 'my-app',
  template: `<h1>Hello ng</h1>

  <hr />
  <h3>Section 2 & 3</h3>
  <courses> </courses>
  <authors></authors>

  <hr />
  <h3>Section 4</h3>
  <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
   <hr />
  <like></like>
   <hr />
   <vote></vote>
   <hr />
   <h4>Challenge</h4>
   <div *ngFor="let tt of tweets">
    <tweet [tweet]="tt"></tweet>
   </div>

    <hr />
    <h3>Section 5</h3>
    <post><post>
  `,
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
