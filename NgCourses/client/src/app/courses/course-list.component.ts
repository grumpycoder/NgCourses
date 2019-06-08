import { Component, OnInit } from "@angular/core";
import { CourseService } from "../shared/course.service";

@Component({
  templateUrl: "./course-list.component.html",
  styles: []
})
export class CourseListComponent implements OnInit {
  courses: any[];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.GetCourseData();
    console.log(this.courses);
  }
}
