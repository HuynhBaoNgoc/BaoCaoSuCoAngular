import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fpt-modal-others-reason',
  templateUrl: './modal-others-reason.component.html',
  styleUrls: ['./modal-others-reason.component.scss']
})
export class ModalOthersReasonComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit() { }
  actionTaken(result: any) {
    this.activeModal.close(JSON.stringify(result));
  }

}
