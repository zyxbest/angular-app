import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { Config } from 'app/config/config';
import { ConfigService } from 'app/config/config.service';
import { Person } from 'app/config/person';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  config = '';
  users: Person[] = [];
  constructor(
    private configService: ConfigService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  logout() {
    this.authService.logout();
  }
  getAll() {
    this.configService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  add() {
    this.configService
      .addUser({
        id: this.users.length ? this.users[this.users.length - 1].id + 1 : 1,
        name: 'zyx',
      })
      .subscribe();
    this.getAll();
  }

  delete(id: number) {
    this.configService.delUser(id).subscribe();
    this.getAll();
  }

  showConfig() {
    this.configService.getConfig().subscribe((data: Config) => {
      console.log(data);
      this.config = JSON.stringify(data);
    });
  }

  clear() {
    // for (const { id } of this.users) {
    //   this.configService.delUser(id).subscribe();
    // }
    // this.getAll();
    alert('想peach ');
    alert('其实是太难实现了');
  }
}
