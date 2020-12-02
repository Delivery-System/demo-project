// built-in
import { Component, OnInit } from '@angular/core';

// custom 
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-requested-users',
  templateUrl: './requested-users.component.html',
  styleUrls: ['./requested-users.component.scss']
})
export class RequestedUsersComponent implements OnInit {

  constructor( private userService:UserService ) { }

  ngOnInit() {
    // this.getWaitingAgent();
  }
  getWaitingAgent(){
    console.log('waiting agent list');
    this.userService.userApproval().subscribe((res)=>{
      console.log(res);
  });
  
  }
 
}
