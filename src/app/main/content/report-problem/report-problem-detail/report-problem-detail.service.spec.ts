import { TestBed } from '@angular/core/testing';

import { ReportProblemDetailService } from './report-problem-detail.service';

describe('ReportProblemDetailService', () => {
  let service: ReportProblemDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportProblemDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
