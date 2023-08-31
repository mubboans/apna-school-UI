import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminmoduleComponent } from './adminmodule.component';
import { StudentsmanagementComponent } from './studentsmanagement/studentsmanagement.component';
import { TeachersmanagementComponent } from './teachersmanagement/teachersmanagement.component';
import { FeessmanagementComponent } from './feessmanagement/feessmanagement.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { StafsmanagementComponent } from './stafsmanagement/stafsmanagement.component';
import { SalarymanagementComponent } from './salarymanagement/salarymanagement.component';
import { NoticeManagementComponent } from '../generalmodule/notice-management/notice-management.component';
import { OrganizationComponent } from './organization/organization.component';
import { DonationmanagementComponent } from './donationmanagement/donationmanagement.component';

const routes: Routes = [{ path: '', component: AdminmoduleComponent },
{path:'student', component: StudentsmanagementComponent,canActivate:[AdminGuardGuard]},
{path:'teacher', component: TeachersmanagementComponent,canActivate:[AdminGuardGuard]},
{path:'fees', component: FeessmanagementComponent,canActivate:[AdminGuardGuard]},
{path:'staff',component:StafsmanagementComponent,canActivate:[AdminGuardGuard]},
{path:'salary',component:SalarymanagementComponent,canActivate:[AdminGuardGuard]},
{path:'notice',component:NoticeManagementComponent,canActivate:[AdminGuardGuard]},
{path:'organization',component:OrganizationComponent,canActivate:[AdminGuardGuard]},
{path:'donation',component:DonationmanagementComponent,canActivate:[AdminGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }
