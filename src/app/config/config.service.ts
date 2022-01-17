import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './config';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  baseURL = 'http://localhost:3000/';
  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

  getUsers() {
    return this.http.get<Person[]>(this.baseURL + 'people');
  }

  addUser(data: Person) {
    return this.http.post<Person>(this.baseURL + 'people', data);
  }

  delUser(id: number) {
    return this.http.delete(this.baseURL + 'people/' + id);
  }

  clear() {
    return this.http.put(this.baseURL + 'people/', []);
  }
}
