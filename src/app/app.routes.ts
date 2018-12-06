import { SpecificationComponent } from './product/specification/specification.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { UsersComponent } from './users/users.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';

export const APP_ROUTES: Routes = [{
    path: "",                          //http://localhost:4200
    redirectTo: "/login",
    pathMatch: "full"
}, {
    path: "login",                     //http://localhost:4200/login
    component: LoginComponent
}, {
    path: "users",
    component: UsersComponent,
    canActivate : [LoginGaurdService]
}, {
    path: "observable",
    component: ObservableDemoComponent
}, {
    path: "pipe",
    component: PipeDemoComponent
}, {
    path: "register",
    component: RegisterComponent
},{
    path : 'product',
    component : ProductComponent,
    children : [
        {path : "overview", component : OverviewComponent},
        {path : "specification", component : SpecificationComponent}
    ]
}, {
    path: "**",
    redirectTo: "/login",
    pathMatch: "full"
}
]