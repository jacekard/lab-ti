import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isUserLoggedIn: Boolean;
  private url: string;

  constructor(
    private http: HttpClient,
    @Inject('API_URL') apiUrl: string) {
      this.url = apiUrl + 'auth/';
    }

  login(login: string, password: string) : Observable<User> {
    console.log(this.url);
    return this.http.post<User>(this.url + 'login', {
      login: login,
      password: password
    });
  }

  register(user: User) {
    return this.http.post(this.url + 'register', user);
  }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.url + 'auth');
  }
}
