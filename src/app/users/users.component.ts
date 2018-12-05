import { DataService } from './../services/data.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { IUser } from '../model/user';
// import { USER_DATA } from '../data/mocks';

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

    constructor(public dataService: DataService) { }

    ngOnInit() {
        // this.users = USER_DATA;
        // this.users = this.dataService.getUserData();
        // this.dataService.getHttpUserData()
        //     .subscribe(data=> this.users = data);
        this.dataService.getHttpClientUserData()
            .subscribe(
                data => {console.log(data);this.users = data},
                err=>console.log(err),
                ()=>{console.log("COMPLETED!")});
    }

    onIncrease() {
        this.dataService.counter++;
    }

    moreInfo(user: IUser) {
        alert(`Hi! Mr. ${user.firstName} is working with ${user.company}!`);
    }
}