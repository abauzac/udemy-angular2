import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { AuthorsComponent }   from './authors.component';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from "./favorite.component";

import { AuthorService } from "./author.service";
import { CourseService } from "./course.service";

import { AutoGrowDirective } from "./auto-grow.directive";

@NgModule({
  imports:      [ BrowserModule ], // module dependency
  declarations: [ AppComponent, 
                  AuthorsComponent,
                  CoursesComponent,
                  FavoriteComponent,
                  
                  AutoGrowDirective ], // directives and components
  bootstrap:    [ AppComponent ],
  providers:    [AuthorService, CourseService], // provider & dependency injection
  //exports : [] // export a specific component to be reusable
})
export class AppModule { }
