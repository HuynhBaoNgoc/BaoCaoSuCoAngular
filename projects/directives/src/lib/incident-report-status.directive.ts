import { SimpleChanges, Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';


enum statusReport{
  canceled='Đã huỷ',
  waiting='Chờ xử lý',
  classified='Đã phân loại',
  draft='Nháp'
}

@Directive({
  selector: '[libIncidentReportStatus]'
})
export class IncidentReportStatusDirective {

  constructor(private el: ElementRef) {
  }
  ngOnChanges(changes: SimpleChanges) {

    //#region change style status report
    switch(this.libIncidentReportStatus+''){
      case statusReport.canceled:{
        this.el.nativeElement.classList.add('canceled');
        break;
      }
      case statusReport.classified:{
        this.el.nativeElement.classList.add('classified');
        break;
      }
      case statusReport.draft:{
        this.el.nativeElement.classList.add('draft');
        break;
      }
      case statusReport.waiting:{
        this.el.nativeElement.classList.add('watting');
        break;
      }
    }

  }
  @Input()libIncidentReportStatus!: string;
}



enum WaittingTime{
  Ontime='Đúng giờ',
  Late ='Trễ giờ'
}

@Directive({
  selector: '[waitting]'
})
export class WaittingTimeCl {

  constructor(private el: ElementRef) {
  }
  ngOnChanges(changes: SimpleChanges) {

    //#region change style status report
    switch(this.waitting+''){
      case WaittingTime.Late:{
        this.el.nativeElement.style.color='red';
        break;
      }
      case WaittingTime.Ontime:{
        this.el.nativeElement.style.color='green';
        break;
      }
    }

  }
  @Input()waitting!: string;
}


