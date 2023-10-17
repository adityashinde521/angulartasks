import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

ContactusForm: FormGroup;
FirstName: string = '';
LastName: string = '';
MobileNumber: number = 0;
DateofEnquiry: Date = new Date();
Email: string = '';
Textarea: string = '';

// matcher: ErrorStateMatcher;
formControlName: FormControl = new FormControl();


  constructor( private formbldr:FormBuilder) { 
    this.ContactusForm = formbldr.group({
      'FirstName': [null, Validators.required],
      'LastName': [null, Validators.required],
      'MobileNumber': [null, Validators.required],
      'DateofEnquiry': [null, Validators.required],
      'Email': [null, Validators.required, Validators.email],
      'Textarea': [null, Validators.required]
  })
  }

  onFormSubmit() {
   
    console.log(this.ContactusForm.value);
    
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    

  }
  
}
