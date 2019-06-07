import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <nav-bar></nav-bar>
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
     </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Angular Courses';
}
