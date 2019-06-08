import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as AspNetData from "devextreme-aspnet-data-nojquery";
import { ICourse } from "../models/course";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  dataSource: any;
  private url: string = "http://localhost:4300/api/courses";

  constructor(private http: HttpClient) {}

  GetCourseData(): any[] {
    let data: any = AspNetData.createStore({
      key: "id",
      loadUrl: this.url
    });
    return data;
  }

  GetCourses(): any[] {
    let courses = [{ id: 1, name: "math" }, { id: 2, name: "science" }];
    return courses;
  }

  getCourse(id: number): any {
    return this.http.get<ICourse>(this.url + "/" + id + "/full");
  }
}
