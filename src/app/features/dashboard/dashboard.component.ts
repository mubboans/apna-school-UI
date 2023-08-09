import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/core/models/user.model';
import { LocalStorageDataService } from 'src/app/core/service/local-storage-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user:User;
  polardata: any;
  linedata:any;
  name:string="almumin english high school";
  month="June";
  year="2023";
  constructor(public localData:LocalStorageDataService,public messageService:MessageService) { }

  ngOnInit(): void {
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
    this.user = this.localData.getUserLocalData();
  }
  selectData(event) {
    console.log(event.element)

    this.messageService.add({severity: 'info', summary: 'Data Selected', detail: this.linedata.datasets[event.element._datasetIndex].data[event.element._index]});
}

}
