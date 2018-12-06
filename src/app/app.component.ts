import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public authService : AuthService){}

  onLogout(){
    this.authService.logout();
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDhVlmU5uHDRSaxebegP5uVcVsLPAvF6Ig",
      authDomain: "fir-sg-app.firebaseapp.com"
    })
  }
}
