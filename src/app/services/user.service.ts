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

   AGENT_APPROVAL="http://localhost:3000/waitingAgents";
   APPROVED_AGENT="http://localhost:3000/admin/approve";
   DECLINE_AGENT="http://localhost:3000/admin/decline";
   ALL_USERS="http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  // qgent request list
  agentApproval():Observable<agentRequest>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
   
    return this.http.get<agentRequest>(`${this.AGENT_APPROVAL}`,{ headers: headers });
  }

  // approve agent
  approveAgent(id: string):Observable<agentRequest>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.patch<agentRequest>(`${this.APPROVED_AGENT}/${id}`,{ headers: headers });
  }

  // decline agent
  declineAgent(id: string):Observable<agentRequest>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.patch<agentRequest>(`${this.DECLINE_AGENT}/${id}`,{ headers: headers });

  }

  // get all users
  getAllUsers():Observable<agentRequest>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<agentRequest>(`${this. ALL_USERS}`,{ headers: headers });
  }
}
