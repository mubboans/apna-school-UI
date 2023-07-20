import { Component, OnInit } from '@angular/core';
import { LocalStorageDataService } from '../../service/local-storage-data.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showsidebar: boolean = false;
  date=new Date();
  username:string;
  userProfile:string;
  userRole:string;
  user:User;
  constructor(public localData:LocalStorageDataService) { }

  ngOnInit(): void {
    this.user=this.localData.getUserLocalData();
  }
  logout(){
    console.log('logout user');
    
    this.localData.logoutUser();
  }
  
}
