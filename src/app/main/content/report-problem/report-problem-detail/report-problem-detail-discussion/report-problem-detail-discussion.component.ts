import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-report-problem-detail-discussion',
  templateUrl: './report-problem-detail-discussion.component.html',
  styleUrls: ['./report-problem-detail-discussion.component.scss']
})
export class ReportProblemDetailDiscussionComponent implements OnInit {
  cmtArray = [] as any;
  comment:string = '';
  showComment(comment: string) {
    this.cmtArray.push(comment);
  }
  
  constructor() {}
  
  ngOnInit(): void {
  }
}
