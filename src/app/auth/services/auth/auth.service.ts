import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginReq, LoginRes } from 'auth/models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(
    private _httpClient: HttpClient
  ) { }

  isAuthenticated() {
    if (localStorage.getItem('token')) { this.token = localStorage.getItem('token'); }
    return this.token != null;
  }

  login(login: LoginReq) {
    return this._httpClient.post<LoginRes>('api/login?delay=2', login);
  }
}
