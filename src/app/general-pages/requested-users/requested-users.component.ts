// built-in
import { Component, OnInit } from '@angular/core';
// import { NgxPaginateModule } from 'ngx-paginate';
// import { NgxPaginationModule } from 'ngx-pagination';

// custom 
import { UserService } from 'src/app/services/user.service';
import { agentRequest } from '../../modals/agentRequest';

@Component({
  selector: 'app-requested-users',
  templateUrl: './requested-users.component.html',
  styleUrls: ['./requested-users.component.scss']
})
export class RequestedUsersComponent implements OnInit {

  items = [];
  agentRequest:any=[];
  pageOfItems: Array<any>;


  constructor(private userService: UserService) {
    // for(let i=1; i < 200 ; i++){
    //   let obje={'name':`User Name${i}`,'id':`UID${i}`};
    //   this.items.push(obje);
    // }
  }

  ngOnInit() {
    this.getWaitingAgent();
    // an example array of 150 items to be paged
    // this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
    // for (let i = 1; i < 200; i++) {
    //   let obje = { 'name': `User Name${i}`, 'id': `UID${i}` };
    //   this.items.push(obje);
    // }
  }
  getWaitingAgent() {
    console.log('waiting agent list');
    this.userService.userApproval().subscribe((res) => {
      console.log(res);
      this.agentRequest=res.accounts;
      // for(let i=1; i < this.agentRequest.length ; i++){
      //   let obje=this.agentRequest[i];
      //   this.items.push(obje);
      // }
      console.log('request array',this.agentRequest);
      // console.log('request array copy',this.items);
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
