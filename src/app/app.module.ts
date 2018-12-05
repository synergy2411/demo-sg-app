import { AuthService } from './services/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { LifeCycleDemoComponent } from './life-cycle-demo/life-cycle-demo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UsersComponent } from './users/users.component';
import { UnlessDirective } from './directives/unless.directive';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/countrycode.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
    LifeCycleDemoComponent,
    HighlightDirective,
    UnlessDirective,
    LoginComponent,
    RegisterComponent,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
