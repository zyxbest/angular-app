import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from 'assets/path';
import { AuthGuard } from './auth/auth.guard';
import { ChildAComponent } from './child/child-a/child-a.component';
import { ChildBComponent } from './child/child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { HttpComponent } from './http/http.component';
import { SecondComponent } from './second/second.component';
import { HomepageComponent } from './templates/homepage/homepage.component';
import { LoginComponent } from './templates/login/login.component';
import { RegisterComponent } from './templates/register/register.component';
import { TimeElapsingComponent } from './templates/time-elapsing/time-elapsing.component';
import { UnauthComponent } from './templates/unauth/unauth.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: Path.LOGIN_ROUTE },
  {
    path: 'unauth',
    component: UnauthComponent,
    // pathMatch: 'full',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'time-elapsing',
    component: TimeElapsingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'first-component',
    component: FirstComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'child-a', component: ChildAComponent },
      { path: 'child-b', component: ChildBComponent },
    ],
  },
  {
    path: 'second-component',
    component: SecondComponent,
  },
  {
    path: 'http-client',
    component: HttpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
