
import {Component} from "@angular/core";
import {CourseService} from "./course.service";

@Component({
    selector: "courses",// css selector 
    template : `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow />
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
    </ul>
    `
})
export class CoursesComponent{
    public title:string = "the title of courses page";

    courses;

    constructor(courseService : CourseService){
        this.courses = courseService.getCourses();
    }
}