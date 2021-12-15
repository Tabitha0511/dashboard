import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  ssd = [];
  baseURL: string = 'http://api.scb.se/OV0104/v1/doris/en/ssd';
  constructor(private http: HttpClient) {}

  getSSD(): any {
    axios.get(this.baseURL).then((v) => {
      this.ssd = v.data;
    });
  }
}
