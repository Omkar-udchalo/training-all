import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angu-template-forms';
  user: User;
  onSubmit(form: NgForm) {
    console.log(form.value);
    // let firstName = form.value.fname
    this.user = new User(
      form.value.fname,
      form.value.lname,
      form.value.addr,
      form.value.email,
      form.value.mobile
    );
    form.reset();
    console.log('User data' + this.user);

    alert('Form Submitted');
  }
}
