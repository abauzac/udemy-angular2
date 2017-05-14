import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { AuthorsComponent }   from './authors.component';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from "./favorite.component";
import { LikeComponent } from "./like.component";
import { VoteComponent } from "./vote.component";
import { TweetComponent } from "./tweet.component";
import { PostComponent } from "./post.component";

import { AuthorService } from "./author.service";
import { CourseService } from "./course.service";
import { TweetService } from "./tweet.service";

import { SummaryPipe } from "./summary.pipe";

import { AutoGrowDirective } from "./auto-grow.directive";

@NgModule({
  imports:      [ BrowserModule ], // module dependency
  declarations: [ AppComponent, 
                  AuthorsComponent,
                  CoursesComponent,
                  FavoriteComponent,
                  LikeComponent,
                  VoteComponent,
                  TweetComponent,
                  PostComponent,
                  
                  SummaryPipe,

                  AutoGrowDirective ], // directives and components
  bootstrap:    [ AppComponent ],
  providers: [AuthorService, CourseService, TweetService], // provider & dependency injection
  //exports : [] // export a specific component to be reusable
})
export class AppModule { }
