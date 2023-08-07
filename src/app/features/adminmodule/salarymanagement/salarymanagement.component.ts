import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AdminService } from 'src/app/core/service/admin.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { GlobalService } from 'src/app/core/service/global.service';
import { ProfileService } from 'src/app/core/service/profile.service';

@Component({
  selector: 'app-salarymanagement',
  templateUrl: './salarymanagement.component.html',
  styleUrls: ['./salarymanagement.component.scss']
})
export class SalarymanagementComponent implements OnInit {

  salaryDialog: boolean;

  salaryArr: any[];

  salaryObj: any;

  submitted: boolean;

  studentUsers:any[];
  
  constructor(public global: GlobalService, public profile: ProfileService, public auth: AuthService,
    public admin:AdminService) { }

  ngOnInit(): void {
    this.getSalary();
  }
   exportExcel() {
  this.global.exportExcel(this.salaryArr,"Salary")
  }

  openNew() {
    this.salaryObj = new User;
    this.submitted = false;
    this.salaryDialog = true;
  }
  deleteAccount(id) {
    this.admin.fnDeleteSalary(id).subscribe((x: any) => {
      if (x.success) {
        this.global.showErrorToast(x.message, x.status);
        this.getSalary();
      }
    })
  }
  editAccount(studobj) {
    this.salaryObj = { ...studobj };
    this.salaryDialog = true;
  }
  saveProduct() {
    this.submitted = true;
    // let id = this.studentUsers.filter(user=>user.id == this.salaryObj.userId).map(x=>x.id) 
    // console.log(id);
    this.salaryObj.userDetail = this.salaryObj.userId;
  //  this.feesPaymentObj.studentDetail=this.feesPaymentObj.studentID;
    if (this.salaryObj._id) {
      this.admin.fnUpdateSalary(this.salaryObj._id,this.salaryObj).subscribe((x: any) => {
        if (x.success) {
          this.global.showToast('success', x.message, x.status);
          this.getSalary();
        }
      })
    }
    else {

        this.admin.fnPostSalary(this.salaryObj).subscribe((x: any) => {
          if (x.success) {
            // this.global.showToast('success',x.message,x.status);
            this.getSalary();
          }
        })
    }
    this.salaryDialog = false;
  }
  hideDialog() {
    this.salaryDialog = false;
    this.submitted = false;
  }
  getSalary() {
    this.admin.fnGetSalary().subscribe((users: any) => {
      this.salaryArr = users.data;
    })
  }
  getUser() {
    this.profile.fnGetAllUser().subscribe((users: any) => {
      this.studentUsers = users.data.filter(user => user.role === 'student')
      .map(student => ({
        id: student._id,
        // name: `${student.name}_${student.contact}`,
        name:student.name
      }));
      
    })
  }
}
