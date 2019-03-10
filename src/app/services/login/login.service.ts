import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly URL_API = 'http://localhost:8888/user/';
  constructor(private http: HttpClient) { }

  getCount(datas)
  {
    //requete de type post -> envoyer / recevoir des datas (lecture / ecriture)
    // get -> lecture seule
    return this.http.post<any>(this.URL_API, datas);
  }
}
