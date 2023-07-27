import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-polarchart',
  templateUrl: './polarchart.component.html',
  styleUrls: ['./polarchart.component.scss']
})
export class PolarchartComponent implements OnInit {
  @Input() polardata:any;
  constructor() { }

  ngOnInit(): void {
  }

}
