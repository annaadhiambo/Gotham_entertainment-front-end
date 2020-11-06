import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http: HttpClient) { }

  registerNewUser(userData): Observable<any> {
    return this.Http.post(`${baseUrl}register/`, userData);
  }

  loginUser(data): Observable<any> {
    return this.Http.post(`${baseUrl}login/`, data);
  }
}
