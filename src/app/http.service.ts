import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import {RegisterDTO} from './dto/RegisterDTO';
import { HttpHeaders } from '@angular/common/http';
import { PasswordChangeDTO } from './dto/PasswordChangeDTO';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //baseUrl = 'http://localhost:8361/login';

  baseUrl = 'http://localhost:8360/api';

  constructor(private http: HttpClient) { }

  deneme(): Observable<any> {
    console.log('Http Service deneme methodu çalıştı');
    return this.http.get(this.baseUrl + '/login-service/login' + '/deneme');
  }

  register(registerDTO: RegisterDTO): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    const subUrl = '/login-service/login/register';

    console.log(this.baseUrl + subUrl);

    return this.http.post(this.baseUrl + subUrl, registerDTO, {observe: 'response'});
  }

  changePassword(passwordChangeDTO: PasswordChangeDTO): Observable<any>{
    const subUrl = '/mail-service/mail/passwordReset';

    return this.http.post(this.baseUrl + subUrl, passwordChangeDTO, {observe: 'response'});
  }
}
