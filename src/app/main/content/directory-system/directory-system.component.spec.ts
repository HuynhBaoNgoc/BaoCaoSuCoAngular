import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorySystemComponent } from './directory-system.component';

describe('DirectorySystemComponent', () => {
  let component: DirectorySystemComponent;
  let fixture: ComponentFixture<DirectorySystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorySystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorySystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
