import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../model/user';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent {

  @Input('user')
  user: IUser;

  @Output('childEvent') childEvent = new EventEmitter<IUser>();

  moreInfo(user : IUser){
    this.childEvent.emit(user);
  }
  // moreInfo(user: any) {
  //   alert(`${user.firstName} is working with ${user.company}!`);
  // }
}
