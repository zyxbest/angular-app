import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'app/auth/auth.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  displayedColums= ['id','username','email']
  users = new MatTableDataSource<any>([]);
  constructor(private authService: AuthService, private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get(environment.apiUrl + '/users').subscribe({
      next: (value: any) => {
        console.log(value);
        this.users.data = value;
      },
    });
  }

  logout() {
    this.authService.logout();
  }
  click(email:string){
    console.log(email);
  }
}
