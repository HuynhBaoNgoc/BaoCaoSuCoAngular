import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOthersReasonComponent } from './modal-others-reason.component';

describe('ModalOthersReasonComponent', () => {
  let component: ModalOthersReasonComponent;
  let fixture: ComponentFixture<ModalOthersReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOthersReasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOthersReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
