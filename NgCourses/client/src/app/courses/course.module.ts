import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DxDataGridModule, DxTemplateModule } from "devextreme-angular";

import { CourseListComponent } from "./course-list.component";

const routes = [{ path: "", component: CourseListComponent }];
@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxDataGridModule,
    DxTemplateModule
  ]
})
export class CourseModule {}
