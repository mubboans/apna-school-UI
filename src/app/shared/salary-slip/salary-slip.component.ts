import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/core/service/global.service';

@Component({
  selector: 'app-salary-slip',
  templateUrl: './salary-slip.component.html',
  styleUrls: ['./salary-slip.component.scss']
})
export class SalarySlipComponent implements OnInit {
  @Output() bookTitleCreated = new EventEmitter();
  @ViewChild('pdfTable') pdfTable: ElementRef;
  @Input() salArr;
  constructor(public global:GlobalService) { }

  ngOnInit(): void {
    console.log(this.pdfTable,'pdfTable');
    // this.bookTitleCreated.
  }
  ngAfterViewInit(): void {
    this.bookTitleCreated.emit(this.pdfTable.nativeElement)
    const element = document.querySelector('card');
    // this.bookTitleCreated.emit(this.pdfTable)
    console.log(this.pdfTable,'pdfTable after view');
  }
}
