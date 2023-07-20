import { Component, OnInit } from '@angular/core';
import { LocalStorageDataService } from './core/service/local-storage-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public localData:LocalStorageDataService){}
  showHeader:boolean;
  ngOnInit(): void {
console.log(this.showHeader,this.localData.isUserLogin());

  }
  title = 'Angular-Lean-Structure';

}
