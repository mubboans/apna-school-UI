import { Component, OnInit } from '@angular/core';
import { LocalStorageDataService } from '../../service/local-storage-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showsidebar: boolean = false;
  date=new Date()
  constructor(public localData:LocalStorageDataService) { }

  ngOnInit(): void {
  }
  logout(){
    console.log('logout user');
    
    this.localData.logoutUser();
  }
  
}
