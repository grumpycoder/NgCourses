import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-course-info",
  templateUrl: "./course-info.component.html",
  styles: []
})
export class CourseInfoComponent implements OnInit {
  course: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.course = data.resolvedData.course;
    });
  }
}
