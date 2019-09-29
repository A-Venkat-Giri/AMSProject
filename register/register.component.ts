import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  get email()
  {
    return this.registerForm.get('email');
  }
  get password()
  {
    return this.registerForm.get('password');
  }
  
  registerForm = new FormGroup({
    email : new FormControl('',[Validators.minLength(5),
    Validators.required]) 
    
  });
  printForm(registerForm: NgForm){
    console.log(registerForm.value);
  }

}
