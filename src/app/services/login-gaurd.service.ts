import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginGaurdService implements CanActivate{

  canActivate() : boolean{
    return this.authService.isAuthenticated();
  }

  constructor(private authService : AuthService) { }

}
