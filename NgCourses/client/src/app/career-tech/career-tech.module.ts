import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProgramListComponent } from "./program-list.component";

const routes = [{ path: "", component: ProgramListComponent }];

@NgModule({
  declarations: [ProgramListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CareerTechModule {}
