import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  display:boolean=true;
  constructor(public global:GlobalService) { }

  ngOnInit(): void {
    this.display = this.global.showLoader;
    console.log(this.display);
    
  }
  ngAfterContentChecked() {
    this.display=this.global.showLoader;
     }
}
