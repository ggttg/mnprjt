import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Cool Academy';
  courses = ['English', 'Maths', 'Science'];
  myCourse = this.courses[0];
}
