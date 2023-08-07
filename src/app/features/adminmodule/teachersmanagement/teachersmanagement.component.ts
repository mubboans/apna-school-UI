import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { GlobalService } from 'src/app/core/service/global.service';
import { ProfileService } from 'src/app/core/service/profile.service';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-teachersmanagement',
  templateUrl: './teachersmanagement.component.html',
  styleUrls: ['./teachersmanagement.component.scss']
})
export class TeachersmanagementComponent implements OnInit {
  teacherDialog: boolean;

  teacherUsers: User[];

  teacheruserObj: User;

  selectedTeacher: User[];

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

  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.teacherUsers);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "Teacher");
    });
  }

  saveAsExcelFile(buffer: any, Category: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, Category + '_List_' + new Date().getTime()+ EXCEL_EXTENSION);
  }

  openNew() {
    this.teacheruserObj = new User;
    this.submitted = false;
    this.teacherDialog = true;
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
    this.teacheruserObj = { ...studobj };
    this.teacherDialog = true;
  }
  saveProduct() {
    this.submitted = true;

    if (this.teacheruserObj._id) {
      this.profile.fnUpdateUser(this.teacheruserObj, this.teacheruserObj._id).subscribe((x: any) => {
        if (x.success) {
          this.global.showToast('success', x.message, x.status);
          this.getUser();
        }
      })
    }
    else {
      this.teacheruserObj.confirmpassword = this.teacheruserObj.password;
      this.teacheruserObj.role = "teacher",
        this.auth.fnRegister(this.teacheruserObj).subscribe((x: any) => {
          if (x.success) {
            // this.global.showToast('success',x.message,x.status);
            this.getUser();
          }
        })
    }
    this.teacherDialog = false;
  }
  hideDialog() {
    this.teacherDialog = false;
    this.submitted = false;
  }
  deleteSelectedAccount() {
    console.log(this.selectedTeacher, 'selectedStudents');
    let ids = this.selectedTeacher.map((x) => { return x._id })
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
      ids: this.selectedTeacher
    }
    this.global.showConfirmationToastforUserDelete(obj);
    this.selectedTeacher = null;
  }
  getUser() {
    this.profile.fnGetAllUser().subscribe((users: any) => {
      this.teacherUsers = users.data.filter((x: any) => {
        return x.role == 'teacher'
      });
    })
  }
}
