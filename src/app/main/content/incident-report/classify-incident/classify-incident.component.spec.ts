import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifyIncidentComponent } from './classify-incident.component';

describe('ClassifyIncidentComponent', () => {
  let component: ClassifyIncidentComponent;
  let fixture: ComponentFixture<ClassifyIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassifyIncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifyIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
