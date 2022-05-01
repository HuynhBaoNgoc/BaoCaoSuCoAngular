import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogServiceService {
  private modalRe:any;
  constructor(private ngbModal: NgbModal) {}
  open(props:any): Promise<any> {
    this.modalRe = this.ngbModal.open(DialogComponent, {
      size: 'lg',
      backdrop: 'static',
    });
    this.modalRe.componentInstance.setDialogProps(props);
    return this.modalRe.result;
  }
}
