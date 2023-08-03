import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminmoduleComponent } from './adminmodule.component';
import { StudentsmanagementComponent } from './studentsmanagement/studentsmanagement.component';
import { TeachersmanagementComponent } from './teachersmanagement/teachersmanagement.component';
import { FeessmanagementComponent } from './feessmanagement/feessmanagement.component';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [{ path: '', component: AdminmoduleComponent },
{path:'student', component: StudentsmanagementComponent,canActivate:[AdminGuardGuard]},
{path:'teacher', component: TeachersmanagementComponent,canActivate:[AdminGuardGuard]},
{path:'fees', component: FeessmanagementComponent,canActivate:[AdminGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }
