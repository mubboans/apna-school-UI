import { Component, OnInit } from '@angular/core';
import { LocalStorageDataService } from './core/service/local-storage-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public localData:LocalStorageDataService){}
  showHeader = this.localData.isUserLogin();
  ngOnInit(): void {
console.log(this.showHeader);

  }
  title = 'Angular-Lean-Structure';

}
