import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpclientService } from './httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  controls: any

  constructor(
    private http: HttpClient,
  ) { }

  readonly url : string = 'localhost:8080/api'
  // readonly url: string = 'https://trabalho-ia/api'

  getIformação(){
    return this.http.get<any>( `${this.url}/getInformacao`)
  }
}