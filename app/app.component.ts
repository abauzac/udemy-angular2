import { Component } from '@angular/core';


// control the entire page
@Component({
  selector: 'my-app',
  template: `<h1>Hello ng</h1>
  <courses> </courses>
  <authors></authors>
  <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
  `,
})
export class AppComponent {

  post = {
    title: "my title",
    isFavorite: false
  }

  onFavoriteChange($event) {
    console.log($event);
  }

 }
