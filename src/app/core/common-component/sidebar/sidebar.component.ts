import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global.service';
import { LocalStorageDataService } from '../../service/local-storage-data.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  users:User;
  constructor(public global:GlobalService,public localStoreData:LocalStorageDataService) { }

  ngOnInit(): void {
    this.users=this.localStoreData.getUserLocalData();
  }

}
