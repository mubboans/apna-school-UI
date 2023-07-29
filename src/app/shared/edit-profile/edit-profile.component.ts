import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
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
  constructor(public global:GlobalService,public profile:ProfileService) { }

  ngOnInit(): void {
    this.user = this.global.user;
    this.getUserDetails()
  }
 getUserDetails() {
  this.profile.getProfileDetailithId(this.user.id).subscribe((x:any)=>{
    if(x.success) {
      this.userprofileData = x.data;
      console.log(this.userprofileData,'user profiile');
    }
    
  })
 }
}
