import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { IUser } from '../model/user';
import { USER_DATA } from '../data/mocks';
 
@Component({
    selector: 'app-users',
    // template : `<h1>Users Component Loaded Successfully!</h1>`,
    // styles : [`
    //     h2 {
    //         color : orange;
    //     }
    // `]
    templateUrl: './users.component.html',
    styleUrls: ['./user.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class UsersComponent implements OnInit {

    users: IUser[];

    constructor(){
        // this.user = USER_DATA;
    }

    ngOnInit(){
        this.users = USER_DATA;
    }

    moreInfo(user: IUser) {
        // console.log(user);
        alert(`Hi! Mr. ${user.firstName} is working with ${user.company}!`);
    }
}