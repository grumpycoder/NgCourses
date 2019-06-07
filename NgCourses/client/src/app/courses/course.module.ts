import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: CourseListComponent }
]
@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseModule { }
