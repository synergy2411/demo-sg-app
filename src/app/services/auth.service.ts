import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  private token : string = null;

  register(email: string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response=>{
        console.log("User registered successfully!");
      })
      .catch(err=>console.log(err))
  }

  login(email : string, password: string){
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(response=>{
        firebase.auth().currentUser.getIdToken()
          .then(token=>{
            this.router.navigate(['/users']);
            this.token = token;
          }).catch(err=>console.log(err))
      }).catch(err=>console.log(err));
  }

  getToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  logout(){
    firebase.auth().signOut()
      .then(res=>{
        this.router.navigate(['/login']);
        this.token = null;
      }).catch(err=>console.log(err));
  }
  
  constructor(private router : Router) { }

}
