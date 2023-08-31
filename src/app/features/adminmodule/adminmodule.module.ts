import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminmoduleRoutingModule } from './adminmodule-routing.module';
import { AdminmoduleComponent } from './adminmodule.component';
import { FeessmanagementComponent } from './feessmanagement/feessmanagement.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PolarchartComponent } from './polarchart/polarchart.component';
import { StafsmanagementComponent } from './stafsmanagement/stafsmanagement.component';
import { StudentsmanagementComponent } from './studentsmanagement/studentsmanagement.component';
import { TeachersmanagementComponent } from './teachersmanagement/teachersmanagement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'primeng/chart';
import { SalarymanagementComponent } from './salarymanagement/salarymanagement.component';
import { OrganizationComponent } from './organization/organization.component';
import { DonationmanagementComponent } from './donationmanagement/donationmanagement.component';


@NgModule({
  declarations: [
    AdminmoduleComponent,
    FeessmanagementComponent,
    LinechartComponent,
    PolarchartComponent,
    StafsmanagementComponent,
    StudentsmanagementComponent,
    TeachersmanagementComponent,
    SalarymanagementComponent,
    OrganizationComponent,
    DonationmanagementComponent
  ],
  imports: [
    CommonModule,
    AdminmoduleRoutingModule,ChartModule,
    SharedModule
  ]
})
export class AdminmoduleModule { }
