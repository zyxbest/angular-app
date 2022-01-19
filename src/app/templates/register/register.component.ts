import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) {
    http.get(environment.apiUrl + '/a').subscribe((v) => {
      console.log(v,'vvv');
    });
  }

  ngOnInit(): void {}

  getUsers() {
    this.http.get(environment.apiUrl + '/users').subscribe((value) => {
      this.values = JSON.stringify(value);
    });
  }
}
