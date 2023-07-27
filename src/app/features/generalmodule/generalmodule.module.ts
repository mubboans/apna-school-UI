import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralmoduleRoutingModule } from './generalmodule-routing.module';
import { GeneralmoduleComponent } from './generalmodule.component';


@NgModule({
  declarations: [
    GeneralmoduleComponent
  ],
  imports: [
    CommonModule,
    GeneralmoduleRoutingModule
  ]
})
export class GeneralmoduleModule { }
