import { DialogVolunteerComponent } from './dialog-volunteer/dialog.component';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogRequireComponent } from './dialog-require/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogServiceService {
  private modalRe:any;
  constructor(private ngbModal: NgbModal) {}
  openVolunteer(props:any): Promise<any> {
    this.modalRe = this.ngbModal.open(DialogVolunteerComponent, {
      size: 'lg',
      backdrop: 'static',
    });
    this.modalRe.componentInstance.setDialogProps(props);
    return this.modalRe.result;
  }
  openRequire(props:any): Promise<any> {
    this.modalRe = this.ngbModal.open(DialogRequireComponent, {
      size: 'lg',
      backdrop: 'static',
    });
    this.modalRe.componentInstance.setDialogProps(props);
    return this.modalRe.result;
  }
}
