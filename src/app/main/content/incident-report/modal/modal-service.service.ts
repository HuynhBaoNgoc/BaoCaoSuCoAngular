import { ModalOthersReasonComponent } from './modal-others-reason/modal-others-reason.component';
import { ModalOthersIncidentComponent } from './modal-others-incident/modal-others-incident.component';
import { ModalDialogComponent } from './modal-filter/modal-filter.component';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root',
})
export class DialogServiceService {
  private modalRe:any;
  constructor(private ngbModal: NgbModal) {}
  openFilter(): Promise<any> {
    this.modalRe = this.ngbModal.open(ModalDialogComponent, {
      size: 'md',
      backdrop: 'static',
    });
    this.modalRe.componentInstance.setDialogProps();
    return this.modalRe.result;
  }
  openIncident(): Promise<any> {
    this.modalRe = this.ngbModal.open(ModalOthersIncidentComponent, {
      size: 'md',
      backdrop: 'static',
    });
    this.modalRe.componentInstance.setDialogProps();
    return this.modalRe.result;
  }
  openReason(): Promise<any> {
    this.modalRe = this.ngbModal.open(ModalOthersReasonComponent, {
      size: 'md',
      backdrop: 'static',
    });
    this.modalRe.componentInstance.setDialogProps();
    return this.modalRe.result;
  }
}
