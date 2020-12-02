// built-in 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';

// custom
import {WaitingAgent} from '../modals/waitingAgent'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  userApproval():Observable<WaitingAgent>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
   
    return this.http.get<WaitingAgent>('http://localhost:3000/waitingAgents',{ headers: headers });
  }
}
