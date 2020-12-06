import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  defaultSubscription = 'advanced';
  formSubmitted = false;
  formData = {
    email: '',
    subscription: '',
    password: ''
  };
   @ViewChild('f', {static: false})signUpForm: NgForm;
  onSubmit(f: NgForm) {
    this.formSubmitted = true;
   // console.log('User input' + this.signUpForm.value);
    console.log(f.value);
    this.formData.email = this.signUpForm.value.email;
    this.formData.subscription = this.signUpForm.value.subscription;
    this.formData.password = this.signUpForm.value.password;

  }
}
