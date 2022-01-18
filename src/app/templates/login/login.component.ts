import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    return this.authService.login('123', '123').subscribe();
  }
}
