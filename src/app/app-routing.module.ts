import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ChildAComponent } from './child/child-a/child-a.component';
import { ChildBComponent } from './child/child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { HttpComponent } from './http/http.component';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './templates/login/login.component';
import { RegisterComponent } from './templates/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
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
