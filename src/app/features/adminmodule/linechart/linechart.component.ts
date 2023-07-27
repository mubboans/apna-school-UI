import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  @Input() linedata;
  constructor(public messageService:MessageService) { }
  ngOnInit(): void {
  }
  selectData(event) {
    console.log(event.element)

    this.messageService.add({severity: 'info', summary: 'Data Selected', detail: this.linedata.datasets[event.element._datasetIndex].data[event.element._index]});
}
}
