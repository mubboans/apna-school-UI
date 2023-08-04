import { Component, OnInit } from '@angular/core';
import { StudentDetails, User } from 'src/app/core/models/user.model';
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
  constructor(public global:GlobalService,public profile:ProfileService) { }
  
  ngOnInit(): void {
    this.getUser()
  }
  openNew() {
    this.studentuserObj = {};
    this.submitted = false;
    this.studentDialog = true;
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
      this.studentUsers = users.data;
      const d = users.data.map((x:any)=>{console.log(x.role,'map',);
       x.role == 'student'});
      console.log(d);

    })
  }
}
