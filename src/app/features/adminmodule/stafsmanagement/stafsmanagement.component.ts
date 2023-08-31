import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { GlobalService } from 'src/app/core/service/global.service';
import { ProfileService } from 'src/app/core/service/profile.service';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-stafsmanagement',
  templateUrl: './stafsmanagement.component.html',
  styleUrls: ['./stafsmanagement.component.scss']
})
export class StafsmanagementComponent implements OnInit {
  staffDialog: boolean;

  staffUsers: User[];

  staffuserObj: User;

  selectedStaff: User[];

  submitted: boolean;

  statuses: any[];

  cols = [
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'contact', header: 'Phone No' },
    { field: 'password', header: 'Password'},
    { field: 'createdAt', header: 'Created On'},
    { field: 'isActive', header: 'Active'},
 
];
  
  constructor(public global: GlobalService, public profile: ProfileService, public auth: AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }
  freezAccount(id, name) {
    this.profile.fnDeactivateUser(id).subscribe((x: any) => {
      if (x.success) {
        this.global.showToast('warn', 'You have Lock Account ' + name, x.status);
        this.getUser();
      }
    })
  }
  unLockAccount(id) {
    this.profile.fnActivateUser(id).subscribe((x: any) => {
      if (x.success) {
        this.global.showToast('info', x.message, x.status);
        this.getUser();
      }
    })
  }
  onUpload(event,fileUpload){
    let File = event.files[0]
    let formdata = new FormData();
    formdata.append('users',File)
    this.profile.fnCreateBulk(formdata).subscribe((x:any)=>{
      if(x.success){
        this.global.showToast('success',x.message,x.status);
        this.getUser();
      }
    })
    fileUpload.clear();
  }
  
  exportExcel() {
   this.global.exportExcel(this.staffUsers,"Staff")
  }
  openNew() {
    this.staffuserObj = new User;
    this.submitted = false;
    this.staffDialog = true;
  }
  deleteAccount(email) {
    const d = {
      email: email
    }
    this.profile.fnDeleteWithEmail(d).subscribe((x: any) => {
      if (x.success) {
        this.global.showErrorToast(x.message, x.status);
        this.getUser();
      }
    })
  }
  editAccount(studobj: User) {
    this.staffuserObj = { ...studobj };
    this.staffDialog = true;
  }
  saveProduct() {
    this.submitted = true;

    if (this.staffuserObj._id) {
      this.profile.fnUpdateUser(this.staffuserObj, this.staffuserObj._id).subscribe((x: any) => {
        if (x.success) {
          this.global.showToast('success', x.message, x.status);
          this.getUser();
        }
      })
    }
    else {
      this.staffuserObj.confirmpassword = this.staffuserObj.password;
      this.staffuserObj.role = "staff",
        this.auth.fnRegister(this.staffuserObj).subscribe((x: any) => {
          if (x.success) {
            // this.global.showToast('success',x.message,x.status);
            this.getUser();
          }
        })
    }
    this.staffDialog = false;
  }
  hideDialog() {
    this.staffDialog = false;
    this.submitted = false;
  }
  deleteSelectedAccount() {
    let ids = this.selectedStaff.map((x) => { return x._id })
    let obj = {
      message: 'Are you sure you want to delete the selected Accounts?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      deletefn: () => {
        this.profile.fnBulkDelete(obj.ids).subscribe((x: any) => {
          if (x.success) {
            this.global.showToast('success', x.message, x.status);
            this.getUser();
          }
        })
      },
      ids: this.selectedStaff
    }
    this.global.showConfirmationToastforUserDelete(obj);
    this.selectedStaff = null;
  }
  getUser() {
    this.profile.fnGetAllUser().subscribe((users: any) => {
      this.staffUsers = users.data.filter((x: any) => {
        console.log(x.role, 'map',);
        return x.role == 'staff'
      });
    })
  }

}
