import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import datasource from 'assets/datasource';
import { environment } from 'environments/environment';
import { BehaviorSubject, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  // private userSubject: BehaviorSubject<any>;
  user:any;
  constructor(private http: HttpClient) {
    // this.userSubject = new BehaviorSubject<unknown>(
    //   JSON.parse(localStorage.getItem('user') || '{}')
    // );
  }

  // public get userValue() {
  //   return this.userSubject.value;
  // }

  login(username: string, password: string) {
    return this.http
      .post(this.apiUrl + '/login', {
        username,
        password,
      })
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.user = user;
          // this.userSubject.next(user);
          return user;
        })
      );
  }
  logout() {
    return this.http.get(this.apiUrl + '/logout');
  }
}
