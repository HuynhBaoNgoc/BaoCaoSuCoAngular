import { Component, OnInit } from '@angular/core';
import { DialogServiceService } from './modal/modal-service.service';

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.scss']
})
export class IncidentReportComponent implements OnInit {

  constructor(private dialogService: DialogServiceService) {  }

  ngOnInit(): void {
  }
  showDialogFilter() {
    this.dialogService.openFilter()
      .then(result => {
        console.log(result);
    }, () => {});
  }
  showDialogReason() {
    this.dialogService.openReason()
      .then(result => {
        console.log(result);
    }, () => {});
  }
  showDialogIncident() {
    this.dialogService.openIncident()
      .then(result => {
        console.log(result);
    }, () => {});
  }
}
