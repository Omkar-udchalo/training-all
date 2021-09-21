import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z]{3,15}'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{2}-[0-9]{10}'),
      ]),
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.fname + form.value.lname);
    console.log('Email', form.value.email);
    console.log('Address', form.value.address);
    console.log('Mobile', form.value.mobile);

    form.reset();
  }
}
