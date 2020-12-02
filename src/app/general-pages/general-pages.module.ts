// built-in module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// custom module
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RequestedUsersComponent } from './requested-users/requested-users.component';
import { ApprovedUsersComponent } from './approved-users/approved-users.component';
import { AllUsersComponent } from './all-users/all-users.component';


const routes : Routes = [
  { path: 'blank-page', component: BlankPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'userRequest', component: RequestedUsersComponent },
  { path: 'userApproval', component: ApprovedUsersComponent },
  { path: 'allUser', component: AllUsersComponent }

]

@NgModule({
  declarations: [BlankPageComponent,AllUsersComponent,ApprovedUsersComponent, ProfilePageComponent,RequestedUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class GeneralPagesModule { }
