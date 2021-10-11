import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  isSignedIn = false;
  error: string = '';
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  onAuthForm(authForm: NgForm) {
    if (!this.isLoginMode) {
      // console.log(authForm.value);
      let mobile: string = authForm.value.mobile + '';

      let user = new User(
        authForm.value.name,
        authForm.value.email,
        authForm.value.password,
        mobile
      );
      // console.log(user);
      this.auth.signup(user);
      // console.log('Sign Up');
    } else {
      const email = authForm.value.email;
      const password = authForm.value.password;
      this.auth.login(email, password);
    }
    authForm.reset();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
