import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProblemDetailDiscussionComponent } from './report-problem-detail-discussion.component';

describe('ReportProblemDetailDiscussionComponent', () => {
  let component: ReportProblemDetailDiscussionComponent;
  let fixture: ComponentFixture<ReportProblemDetailDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportProblemDetailDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProblemDetailDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
