import { Component } from '@angular/core';


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
