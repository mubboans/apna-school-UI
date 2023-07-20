import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { LocalStorageDataService } from 'src/app/core/service/local-storage-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user:User;
  constructor(public localData:LocalStorageDataService) { }

  ngOnInit(): void {
    this.user = this.localData.getUserLocalData();
  }

}
