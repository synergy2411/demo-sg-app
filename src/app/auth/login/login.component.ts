import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login(form : NgForm){
    console.log("Username : " + form.value.username + 
              "\nPassword : " + form.value.password);
  }
  constructor() { }

  ngOnInit() {
  }

}
