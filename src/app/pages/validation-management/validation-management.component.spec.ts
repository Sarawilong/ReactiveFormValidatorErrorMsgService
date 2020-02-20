import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationManagementComponent } from './validation-management.component';

describe('ValidationManagementComponent', () => {
  let component: ValidationManagementComponent;
  let fixture: ComponentFixture<ValidationManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
