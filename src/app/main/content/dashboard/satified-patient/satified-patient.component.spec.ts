import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatifiedPatientComponent } from './satified-patient.component';

describe('SatifiedPatientComponent', () => {
  let component: SatifiedPatientComponent;
  let fixture: ComponentFixture<SatifiedPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatifiedPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatifiedPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
