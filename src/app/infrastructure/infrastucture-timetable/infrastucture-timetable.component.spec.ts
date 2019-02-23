import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastuctureTimetableComponent } from './infrastucture-timetable.component';

describe('InfrastuctureTimetableComponent', () => {
  let component: InfrastuctureTimetableComponent;
  let fixture: ComponentFixture<InfrastuctureTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfrastuctureTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfrastuctureTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
