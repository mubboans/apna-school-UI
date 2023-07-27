import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralmoduleComponent } from './generalmodule.component';

const routes: Routes = [{ path: '', component: GeneralmoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralmoduleRoutingModule { }
