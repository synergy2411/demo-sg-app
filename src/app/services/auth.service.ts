import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Conditional } from '@angular/compiler';

@Injectable()
export class AuthService {

  private token : string = null;

  register(email: string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response=>{
        console.log(response);
        console.log("User registered successfully!");
      })
      .catch(err=>console.log(err))
  }

  login(email : string, password: string){
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(response=>{
        console.log("Successfully logged in!");
        firebase.auth().currentUser.getIdToken()
          .then(token=>{
            console.log(token);
            this.token = token;
          }).catch(err=>console.log(err))
      }).catch(err=>console.log(err));
  }

  getToken(){
    return this.token;
  }
  constructor() { }

}
