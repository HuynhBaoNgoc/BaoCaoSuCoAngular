import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationOfInjuryComponent } from './classification-of-injury.component';

describe('ClassificationOfInjuryComponent', () => {
  let component: ClassificationOfInjuryComponent;
  let fixture: ComponentFixture<ClassificationOfInjuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationOfInjuryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationOfInjuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
