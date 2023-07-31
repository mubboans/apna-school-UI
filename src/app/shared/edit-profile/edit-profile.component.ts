import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentDetails, User, teacherDetail } from 'src/app/core/models/user.model';
import { GlobalService } from 'src/app/core/service/global.service';
import { ProfileService } from 'src/app/core/service/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user:User;
  userprofileData:User;
  studentDetails:StudentDetails;
  teacherDetails:teacherDetail;
  constructor(public global:GlobalService,public profile:ProfileService) { }

  ngOnInit(): void {
    this.user = this.global.user;
    this.getUserDetails()
  }
 getUserDetails() {
  this.profile.getProfileDetailithId(this.user.id).subscribe((x:any)=>{
    if(x.success) {
      this.userprofileData = x.data;
      // this.userprofileData.creationDate =this.datePipe.transform(this.userprofileData.createdAt, 'yyyy-MM-dd')
      console.log(this.userprofileData,'user profiile');
    }
    
  })
 }
 getTeacherDetails() {

 }
 getStudentDetails() {
  
 }
 UpdateUserprofile(){
  this.profile.fnUpdateUser(this.userprofileData,this.userprofileData._id).subscribe((x:any) => {
      if(x.success){
        this.global.showToast('success',x.message,x.status);
      }
  },(err:any) => {
    console.log(err);
    
  })
 }
}
