import { Component, OnInit } from '@angular/core';
import { StudentDetails, User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { GlobalService } from 'src/app/core/service/global.service';
import { ProfileService } from 'src/app/core/service/profile.service';

@Component({
  selector: 'app-studentsmanagement',
  templateUrl: './studentsmanagement.component.html',
  styleUrls: ['./studentsmanagement.component.scss']
})
export class StudentsmanagementComponent implements OnInit {
  studentDialog: boolean;

  studentUsers: User[];

  studentuserObj: User;

  selectedStudents: User[];

  submitted: boolean;

  statuses: any[];
  constructor(public global:GlobalService,public profile:ProfileService,public auth:AuthService) { }
  
  ngOnInit(): void {
    this.getUser()
  }
  freezAccount(id,name){
    this.profile.fnDeactivateUser(id).subscribe((x:any)=>{
      if(x.success){
        this.global.showToast('warn','You have Lock Account '+name,x.status);
        this.getUser();
      }
    })
  }
  unLockAccount(id){
    this.profile.fnActivateUser(id).subscribe((x:any)=>{
      if(x.success){
        this.global.showToast('info',x.message,x.status);
        this.getUser();
      }
    })
  }

  openNew() {
    this.studentuserObj = {};
    this.submitted = false;
    this.studentDialog = true;
}
deleteAccount(email){
  const d={
    email:email
  }
  this.profile.fnDeleteWithEmail(d).subscribe((x:any)=>{
    if(x.success){
      this.global.showToast('error',x.message,x.status);
      this.getUser();
    }
  })
}
editAccount(studentuserObj: User) {
  console.log(studentuserObj,'edit ')
  this.studentuserObj = {...studentuserObj};
  this.studentDialog = true;
}
saveProduct() {
  this.submitted = true;

  if (this.studentuserObj._id) {
    this.profile.fnUpdateUser(this.studentuserObj,this.studentuserObj._id).subscribe((x:any)=>{
      if(x.success){
        this.global.showToast('success',x.message,x.status);
        this.getUser();
      }
    })
  }
  else{
    this.studentuserObj.password = 'test123';
    this.studentuserObj.confirmpassword = this.studentuserObj.password;
    this.studentuserObj.role = "student",
    this.auth.fnRegister(this.studentuserObj).subscribe((x:any)=>{
      if(x.success){
        this.global.showToast('success',x.message,x.status);
        this.getUser();
      }
    })
  }
  this.studentDialog =false;
}
hideDialog(){
  this.studentDialog = false;
  this.submitted = false;
}
deleteSelectedProducts() {
  let obj ={
    message: 'Are you sure you want to delete the selected products?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    deletefn:() => {
      this.profile.fnBulkDelete(obj.ids).subscribe((x:any)=>{
        if(x.success){
        this.global.showToast('success','Successful',x.message)
        }
   })
    },
    ids:this.selectedStudents
  }

  this.global.showConfirmationToastforUserDelete(obj)
  this.selectedStudents = null;
}
  getUser(){
    this.profile.fnGetAllUser().subscribe((users:any)=>{
      //  = users.data;
       this.studentUsers = users.data.filter((x:any)=>{console.log(x.role,'map',);
       return x.role == 'student'});
      // console.log(d);

    })
  }
}
