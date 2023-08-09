import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-slip',
  templateUrl: './salary-slip.component.html',
  styleUrls: ['./salary-slip.component.scss']
})
export class SalarySlipComponent implements OnInit {
  @Input() organizationname:string;
  @Input() month;
  @Input() year;
  constructor() { }

  ngOnInit(): void {
  }

}
