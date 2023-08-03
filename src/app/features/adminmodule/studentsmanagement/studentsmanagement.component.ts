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
    callback: () =>{
      this.profile.fnBulkDelete(this.selectedStudents).subscribe((x:any)=>{
          return x;
      })
    }
  }
  this.global.showConfirmationToast(obj)
}
  
}
