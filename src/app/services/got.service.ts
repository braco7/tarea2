import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  gotUrl = "https://thronesapi.com/api/v2/Characters"

  public lista: any;

  constructor(private http: HttpClient) {

  }

  public getList() {
    this.lista = this.http.get(this.gotUrl)
    return this.lista
  }

}
