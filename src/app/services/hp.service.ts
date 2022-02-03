import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HpService {
  field: string = ""
  hpUrl = "http://hp-api.herokuapp.com/api/characters/house/"
  public listaCasa: any
  constructor(private http: HttpClient) {

  }

  public getList(e: string) {
    console.log(this.hpUrl)
    this.listaCasa = this.http.get(this.hpUrl + e)
    return this.listaCasa
  }
}
