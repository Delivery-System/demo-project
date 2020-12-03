// built-in
import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

// custom 
import { UserService } from 'src/app/services/user.service';
import { agentRequest } from '../../modals/agentRequest';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
 // rows = [];
 ColumnMode = ColumnMode;
 items = [];
 allUsers:any=[];

 page = 2;
 pageSize =4;

 constructor(private userService: UserService) {
   
 }

 ngOnInit() {
  
   this.getAllUsers();
   
 }

 // get list of waiting agents
 getAllUsers() {
   console.log('all users list');
   this.userService.getAllUsers().subscribe((res) => {
     console.log(res);
     this.allUsers=res;
     console.log('all users array',this.allUsers);
   
   });
 }


}


