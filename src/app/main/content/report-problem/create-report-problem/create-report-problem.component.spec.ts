import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReportProblemComponent } from './create-report-problem.component';

describe('CreateReportProblemComponent', () => {
  let component: CreateReportProblemComponent;
  let fixture: ComponentFixture<CreateReportProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReportProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReportProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
