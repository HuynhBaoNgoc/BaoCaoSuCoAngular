import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogServiceService } from '../../report-problem-detail-dialog/dialog-service.service';

@Component({
  selector: 'app-report-problem-detail-info',
  templateUrl: './report-problem-detail-info.component.html',
  styleUrls: ['./report-problem-detail-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportProblemDetailInfoComponent implements OnInit {

  constructor(private dialogService: DialogServiceService) {  }

  ngOnInit(): void {
  }
  showDialogDetailsRequire() {
    this.dialogService.openRequire(
      {
        title: 'Subscribe',
        message: 'Do you want to subscribe to this channel?',
        positive: 'Yes',
        negative: 'No',
        neutral: 'Not sure',

      })
      .then(result => {
        console.log(result);
    }, () => {});
  }
  showDialogDetailsVolunteer() {
    this.dialogService.openVolunteer(
      {
        title: 'Subscribe',
        message: 'Do you want to subscribe to this channel?',
        positive: 'Yes',
        negative: 'No',
        neutral: 'Not sure',

      })
      .then(result => {
        console.log(result);
    }, () => {});
  }
}
