import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralmoduleRoutingModule } from './generalmodule-routing.module';
import { GeneralmoduleComponent } from './generalmodule.component';
import { NoticeManagementComponent } from './notice-management/notice-management.component';


@NgModule({
  declarations: [
    GeneralmoduleComponent,
    NoticeManagementComponent
  ],
  imports: [
    CommonModule,
    GeneralmoduleRoutingModule
  ]
})
export class GeneralmoduleModule { }
