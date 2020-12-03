// built-in 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from, Observable } from 'rxjs';

// custom
import {agentRequest} from '../modals/agentRequest'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  userApproval():Observable<agentRequest>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
   
    return this.http.get<agentRequest>('http://localhost:3000/waitingAgents',{ headers: headers });
  }
}
