import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOthersIncidentComponent } from './modal-others-incident.component';

describe('ModalOthersIncidentComponent', () => {
  let component: ModalOthersIncidentComponent;
  let fixture: ComponentFixture<ModalOthersIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOthersIncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOthersIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
