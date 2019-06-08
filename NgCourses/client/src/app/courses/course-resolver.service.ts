import { Injectable } from "@angular/core";
import { CourseResolved } from "../models/course";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { CourseService } from "../shared/course.service";

@Injectable({
  providedIn: "root"
})
export class CourseResolver implements Resolve<CourseResolved> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CourseResolved> {
    const id = +route.paramMap.get("id");
    if (isNaN(+id)) {
      const message = `Course Id was not a number: ${id}`;
      console.log(message);
      return of({ course: null, error: message });
    }
    return this.courseService.getCourse(id).pipe(
      map(course => ({ course: course })),
      catchError(error => {
        const message = `Retrieval error: ${error}`;
        console.log(message);
        return of({ course: null, error: message });
      })
    );
  }

  constructor(private courseService: CourseService) {}
}
