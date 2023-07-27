import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { LocalStorageDataService } from 'src/app/core/service/local-storage-data.service';

@Component({
  selector: 'app-adminmodule',
  templateUrl: './adminmodule.component.html',
  styleUrls: ['./adminmodule.component.scss']
})
export class AdminmoduleComponent implements OnInit {
  date = new Date();
  firstDayofMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  tomorrowdate =new Date();
  first = this.date.getDate() - this.date.getDay();
  last = this.first + 6;
  getWeekfirstDay = new Date(this.date.setDate(this.first))
  polardata: any;
  linedata:any;
  user:User;
  constructor(public localData:LocalStorageDataService) { }
  

  ngOnInit(): void {
    this.user = this.localData.getUserLocalData();
    this.polardata = {
      datasets: [{
          data: [
              11,
              16,
              7,
              3,
              14
          ],
          backgroundColor: [
              "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#E7E9ED",
              "#36A2EB"
          ],
          label: 'My dataset'
      }],
      labels: [
          "Red",
          "Green",
          "Yellow",
          "Grey",
          "Blue"
      ]
  }
  this.linedata={
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0'
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#565656'
        }
    ]
  }
   this.tomorrowdate.setDate(this.tomorrowdate.getDate() + 1);
    console.log('today is',this.date,'first day to month'
    ,this.firstDayofMonth,'first day of week',this.getWeekfirstDay,'Tommorow date',this.tomorrowdate);
  }

}
