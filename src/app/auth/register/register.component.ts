import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  password = new FormControl('', [
    Validators.required,
    this.hasExclamationMark
  ]);
  confirm = new FormControl('', [
    // this.duplicatePassword
  ]);
  registerForm: FormGroup;

  duplicatePassword(input : FormControl){
    if(!input.parent){
      return null;
    }
    // return input.parent.controls.password.value == input.value ? null : {duplicate : true} ;
  }

  hasExclamationMark(input: FormControl) {
    // console.log(input);
    const hasExclamation = input.value.indexOf("!") >= 0;
    return hasExclamation ? null : { needExclamation: true };
  }

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password,
      confirm : this.confirm
    })
  }

  register() {
    console.log(this.registerForm);
  }

  ngOnInit() {
  }

}
