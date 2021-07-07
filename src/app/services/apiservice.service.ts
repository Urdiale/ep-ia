import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http: HttpClient
  ) { }
  
  readonly url : string = 'localhost:8080/api/'
  // readonly url: string = 'https://trabalho-ia/api'

  getTreinamento(): Observable<any>{
    return this.http.get<any>( `${this.url}treinamento`)
  }
  getTreinamento1(): Observable<any>{
    return this.http.get<any>( `${this.url}treinamento1`)
  }
  getPesos(){
    return this.http.get<any>( `${this.url}getPesos`)
  }
  getPesosAleatorios(): Observable<any>{
    return this.http.get<any>( `${this.url}pesosAleatorios`)
  }
  getPesosPerfeitosIniciais(): Observable<any>{
    return this.http.get<any>( `${this.url}pesosPerfeitosIniciais`)
  }
  getPesosPerfeitosFinais(): Observable<any>{
    return this.http.get<any>( `${this.url}pesosPerfeitosFinais`)
  }
  getMudarProblema(funcao: string): Observable<any>{
    return this.http.post( `${this.url}problema/`, funcao)
  }
}

