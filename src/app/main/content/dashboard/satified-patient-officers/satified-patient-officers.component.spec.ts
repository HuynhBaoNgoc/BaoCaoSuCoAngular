import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatifiedPatientOfficersComponent } from './satified-patient-officers.component';

describe('SatifiedPatientOfficersComponent', () => {
  let component: SatifiedPatientOfficersComponent;
  let fixture: ComponentFixture<SatifiedPatientOfficersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatifiedPatientOfficersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatifiedPatientOfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
