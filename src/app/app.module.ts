import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { LifeCycleDemoComponent } from './life-cycle-demo/life-cycle-demo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UsersComponent } from './users/users.component';
import { UnlessDirective } from './directives/unless.directive';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent, 
    UsersComponent, 
    UserImageComponent, 
    UserInfoComponent, 
    LifeCycleDemoComponent,
    HighlightDirective,
    UnlessDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
