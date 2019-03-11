import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerclubmanagementComponent } from './computerclubmanagement.component';

describe('ComputerclubmanagementComponent', () => {
  let component: ComputerclubmanagementComponent;
  let fixture: ComponentFixture<ComputerclubmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerclubmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerclubmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
