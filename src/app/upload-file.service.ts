import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
//https://chatservicemicro.herokuapp.com/upload/post
    //http://localhost:8321/upload/post
    const req = new HttpRequest('POST', 'https://chatservicemicro.herokuapp.com/upload/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {

    //https://chatservicemicro.herokuapp.com/upload/getallfiles
    //http://localhost:8321/upload/getallfiles
    return this.http.get('https://chatservicemicro.herokuapp.com/upload/getallfiles');
  }

}
