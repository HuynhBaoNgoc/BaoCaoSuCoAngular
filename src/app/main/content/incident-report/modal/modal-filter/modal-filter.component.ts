import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.css'],
})
export class ModalDialogComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit() { }
  actionTaken(result: any) {
    this.activeModal.close(JSON.stringify(result));
  }

}
