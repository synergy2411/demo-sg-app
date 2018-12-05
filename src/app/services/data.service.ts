import { AuthService } from './auth.service';
import { IUser } from './../model/user';
import { USER_DATA } from './../data/mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

// import { map } from 'rxjs/operators'

@Injectable()
export class DataService{

    constructor(private http : Http,
                private httpClient : HttpClient,
                private authService: AuthService){}
    counter : number = 0;

    getUserData(){
        return USER_DATA;
    }
    getHttpUserData(){
        return this.http.get("assets/user-data.json")
            .map(response=><IUser[]>response.json().userdata)
    }
    getHttpClientUserData(){
        return this.httpClient.get("https://fir-sg-app.firebaseio.com/userdata.json",{
            params : new HttpParams().set("auth", this.authService.getToken())
        }).map(response=><IUser[]>response)
        // }).map(function(response){return <IUser[]>response})

        // return this.httpClient.get("https://fir-sg-app.firebaseio.com/userdata.json?auth="+this.authService.getToken())
        //     .map(response=><IUser[]>response)
    }
    
    // getHttp2UserData(){
    //     return this.http.get("assets/user-data.json")
    //         .pipe(map(response=><IUser[]>response.json().userdata));
    // }

}


