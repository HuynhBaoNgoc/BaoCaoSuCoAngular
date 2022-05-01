import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryIncidentReportsComponent } from './category-incident-reports.component';

describe('CategoryIncidentReportsComponent', () => {
  let component: CategoryIncidentReportsComponent;
  let fixture: ComponentFixture<CategoryIncidentReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryIncidentReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryIncidentReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
