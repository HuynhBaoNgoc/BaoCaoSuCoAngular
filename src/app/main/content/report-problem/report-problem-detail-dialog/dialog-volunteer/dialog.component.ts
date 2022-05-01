import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogVolunteerComponent implements OnInit {
  
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() { }
  
  actionTaken(result: any) {
    this.activeModal.close(JSON.stringify(result));
  }

}
