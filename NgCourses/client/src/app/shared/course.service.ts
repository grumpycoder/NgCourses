import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as AspNetData from "devextreme-aspnet-data-nojquery";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  dataSource: any;
  private url: string = "http://localhost:4300/api/courses";

  constructor(private http: HttpClient) {
    // this.dataSource = AspNetData.createStore({
    //   key: "id",
    //   loadUrl: this.url
    //   //  onBeforeSend: function(method, ajaxOptions) {
    //   //    ajaxOptions.xhrFields = { withCredentials: true };
    //   //  }
    // });
  }

  GetCourseData(): any[] {
    let data = AspNetData.createStore({
      key: "id",
      loadUrl: this.url
    });
    return data;
  }

  GetCourses(): any[] {
    let courses = [{ id: 1, name: "math" }, { id: 2, name: "science" }];
    return courses;
  }
}
