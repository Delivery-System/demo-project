// built-in
import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';


// custom 
import { UserService } from 'src/app/services/user.service';
import { agentRequest } from '../../modals/agentRequest';

@Component({
  selector: 'app-requested-users',
  templateUrl: './requested-users.component.html',
  styleUrls: ['./requested-users.component.scss']
})
export class RequestedUsersComponent implements OnInit {

  // rows = [];
  ColumnMode = ColumnMode;
  items = [];
  agentRequest:any=[];

  page = 1;
  pageSize =3;

 

  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
   
    this.getWaitingAgent();
    // an example array of 150 items to be paged
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
    // for (let i = 1; i < 200; i++) {
    //   let obje = { 'name': `User Name${i}`, 'id': `UID${i}` };
    //   this.items.push(obje);
    // }
  }

  // get list of waiting agents
  getWaitingAgent() {
    console.log('waiting agent list');
    this.userService.agentApproval().subscribe((res) => {
      console.log(res);
      this.agentRequest=res.accounts;
      console.log('request array',this.agentRequest);
    
    });
  }

  // approve agents
  approveAgent(id : string){
    console.log('approve agent', id);
    this.userService.approveAgent(id).subscribe((res)=>{
        console.log(res);
    });
  }

  // decline agents
  declineAgent(id: string){
    console.log('decline agent',id);
  //   this.userService.declineAgent(id).subscribe((res)=>{
  //     console.log(res);
  // });
  }
 
}
