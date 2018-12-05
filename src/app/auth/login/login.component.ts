import { DataService } from './../../services/data.service';
import { AuthService } from './../../services/auth.service';
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
    this.authService.login(
        form.value.username,
        form.value.password  
        )
  }

  getUserData(){
    this.dataService.getHttpClientUserData()
      .subscribe(data=>console.log(data));
  }

  constructor(private authService: AuthService, 
              private dataService : DataService) { }

  ngOnInit() {
  }

}
