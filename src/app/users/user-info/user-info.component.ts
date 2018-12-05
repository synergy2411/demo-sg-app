import { DataService } from './../../services/data.service';
import { IUser } from './../../model/user';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers : [ DataService ]
})
export class UserInfoComponent {

  constructor(public dataService : DataService){}

  onIncrease(){
    this.dataService.counter++;
  }

  @Input('user')
  user: IUser;

  dynamicClass = { 'border': true, 'feature': false };
  dynamicStyle = { 'color' : 'orange' }

  toggle() {
    this.dynamicClass.border = !this.dynamicClass.border;
    this.dynamicClass.feature = !this.dynamicClass.feature;
    this.dynamicStyle.color = 'aqua';
  }

}
