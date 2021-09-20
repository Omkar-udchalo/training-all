import { Component } from '@angular/core';
import { Person } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-advance';
  data = new Person('Sachin');
}
