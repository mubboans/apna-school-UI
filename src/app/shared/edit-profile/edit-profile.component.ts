import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Particular, StudentDetails, User, teacherDetail } from 'src/app/core/models/user.model';
import { GlobalService } from 'src/app/core/service/global.service';
import { ProfileService } from 'src/app/core/service/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user:User;
  userprofileDataform:User;
  studentDetailsform:StudentDetails=new StudentDetails;
  teacherDetailsform:teacherDetail=new teacherDetail;
  
  constructor(public global:GlobalService,public profile:ProfileService) { }

  ngOnInit(): void {
    this.studentDetailsform.particulars = new Particular;
    this.user = this.global.user;
    this.getUserDetails()
    if(this.user && this.user.role =='student') {
      console.log('student');
      this.getStudentDetails();      
    }
    else if(this.user && (this.user.role =='teacher' ||
     this.user.role =='staff')){
      console.log('teacher');
      this.getTeacherDetails();
    }
  }
 getUserDetails() {
  this.profile.getProfileDetailithId(this.user.id).subscribe((x:any)=>{
    if(x.success) {
      this.userprofileDataform = x.data;
      // this.userprofileData.creationDate =this.datePipe.transform(this.userprofileData.createdAt, 'yyyy-MM-dd')
      console.log(this.userprofileDataform,'user profiile');
    }
    
  })
 }
 getTeacherDetails() {
this.profile.fngetTeacherDetails(this.userprofileDataform.userDetailId)
.subscribe((x:any)=>{
  console.log(x);
})
 }
 getStudentDetails() {
  this.profile.fngetStudentdetail(this.userprofileDataform.userDetailId)
.subscribe((x:any)=>{
  console.log(x);
})
 }
 UpdateUserprofile(){
  this.profile.fnUpdateUser(this.userprofileDataform,this.userprofileDataform._id)
  .subscribe((x:any) => {
      if(x.success){
        this.global.showToast('success',x.message,x.status);
      }
  },(err:any) => {
    console.log(err);
    
  })
 }
}
