import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string='';
  reactiveForm: FormGroup;

   
  dummyUser = {
    username: 'user',
    password: 'pass',
  };


  constructor(private router: Router,private formBuilder: FormBuilder)  {
    this.reactiveForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  } 


  onTemplateFormSubmit(form: NgForm) {
    // Simulate a successful login (replace this logic with your authentication logic)
    const email = form.value.email;
    const passcode = form.value.passcode;

    if (email === 'user@example.com' && passcode === 'password') {
      // Redirect to the '/home' page on successful login
      this.router.navigate(['/home']);
    } else {
      // Handle login failure, e.g., display an error message
      //alert('Invalid email or password');
      this.errorMessage = 'Invalid email or passcode';
    }
  }



  onReactiveFormSubmit() {
    if (this.reactiveForm.valid) {
      const enteredUsername = this.reactiveForm.get('username')?.value;
      const enteredPassword = this.reactiveForm.get('password')?.value;

      if (
        enteredUsername === this.dummyUser.username &&
        enteredPassword === this.dummyUser.password
      ) {
        // Successful login, redirect to /home
        this.router.navigate(['/home']);
        console.log('Successful login' + enteredUsername + enteredPassword);
      } else {
        // Invalid login, handle accordingly (e.g., show an error message)
        console.log('Invalid login');
        // Reset the form
        // this.reactiveForm.reset();
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // this.router.navigate(['/login']);
      }
    }

    // this.enteredUsername = this.reactiveForm.get('username')?.value;
    // this.enteredPassword = this.reactiveForm.get('password')?.value;
    // console.log(this.enteredUsername);
    // console.log(this.enteredPassword);
  }

  ngOnInit(): void {
  }

}