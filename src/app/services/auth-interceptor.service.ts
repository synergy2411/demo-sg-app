import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      params : new HttpParams().set("auth", this.authService.getToken() )
    })
    console.log("Auth Interceptor works!", req);
    return next.handle(clonedReq);

  }

  constructor(private authService: AuthService) { }

}
