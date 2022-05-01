import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProblemDetailInfoComponent } from './report-problem-detail-info.component';

describe('ReportProblemDetailInfoComponent', () => {
  let component: ReportProblemDetailInfoComponent;
  let fixture: ComponentFixture<ReportProblemDetailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProblemDetailInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProblemDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
