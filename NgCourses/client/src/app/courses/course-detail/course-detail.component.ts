import { Component, OnInit } from "@angular/core";
import { ICourse, CourseResolved } from "src/app/models/course";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styles: []
})
export class CourseDetailComponent implements OnInit {
  pageTitle = "Course Details";
  errorMessage: any;
  course: ICourse;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      const resolvedData: CourseResolved = data.resolvedData;
      this.errorMessage = resolvedData.error;
      this.onCourseRetrieved(resolvedData.course);
    });
  }

  onCourseRetrieved(course: ICourse): void {
    this.course = course;
    if (this.course) {
      this.pageTitle = `Course Detail: ${this.course.name} (${
        this.course.courseCode
      })`;
    } else {
      this.pageTitle = "No course found";
    }
  }
}
