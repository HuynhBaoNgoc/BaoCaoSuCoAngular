import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fpt-modal-others-incident',
  templateUrl: './modal-others-incident.component.html',
  styleUrls: ['./modal-others-incident.component.scss']
})
export class ModalOthersIncidentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit() { }
  actionTaken(result: any) {
    this.activeModal.close(JSON.stringify(result));
  }
}
