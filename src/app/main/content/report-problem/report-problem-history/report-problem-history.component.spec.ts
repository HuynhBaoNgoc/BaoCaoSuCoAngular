import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProblemHistoryComponent } from './report-problem-history.component';

describe('ReportProblemHistoryComponent', () => {
  let component: ReportProblemHistoryComponent;
  let fixture: ComponentFixture<ReportProblemHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProblemHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProblemHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
