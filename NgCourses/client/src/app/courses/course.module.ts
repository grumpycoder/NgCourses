import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DxDataGridModule, DxTemplateModule } from "devextreme-angular";

import { CourseListComponent } from "./course-list.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { CourseResolver } from "./course-resolver.service";

const routes = [
  { path: "", component: CourseListComponent },
  {
    path: ":id",
    component: CourseDetailComponent,
    resolve: { resolvedData: CourseResolver },
    children: [
      { path: "", component: CourseInfoComponent },
      { path: "info", component: CourseInfoComponent }
    ]
  }
];

@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
    CourseInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxDataGridModule,
    DxTemplateModule
  ]
})
export class CourseModule {}
