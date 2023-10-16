import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Register(regForm: any){

    //console.log(regForm.value); 
     debugger;
     var fname = regForm.controls.fname.value;
     var lname = regForm.controls.lname.value;
     var email = regForm.value.email;
     var password = regForm.value.password;
     console.log(regForm);
   }
   
   signupForm:FormGroup;
   Emplname:string="";
   EmplDesignation:string="";
   EmplDepartment:string="";
   EmplSalary:string="";
   EmplAge: number=0;
   
 
   constructor(private frmbuilder:FormBuilder) {
     this.signupForm=frmbuilder.group({
       Emplname:new FormControl(),
       EmplDesignation:new FormControl(),
       EmplDepartment:new FormControl(),
       EmplSalary: new FormControl(),
       EmplAge: new FormControl(),
     
     })
    }
    
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   PostData(signupForm:any){
     console.log(signupForm.controls);
   }
 
 
 }
 
