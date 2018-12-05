import { IUser } from './../model/user';
import { USER_DATA } from './../data/mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

// import { map } from 'rxjs/operators'

@Injectable()
export class DataService{

    constructor(private http : Http,
                private httpClient : HttpClient){}
    counter : number = 0;

    getUserData(){
        return USER_DATA;
    }
    getHttpUserData(){
        return this.http.get("assets/user-data.json")
            .map(response=><IUser[]>response.json().userdata)
    }
    getHttpClientUserData(){
        return this.httpClient.get("assets/user-data.json")
            .map(response=><IUser[]>response['userdata'])
    }
    
    // getHttp2UserData(){
    //     return this.http.get("assets/user-data.json")
    //         .pipe(map(response=><IUser[]>response.json().userdata));
    // }

}
