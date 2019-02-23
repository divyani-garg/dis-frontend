import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopandconferenceComponent } from './workshopandconference.component';

describe('WorkshopandconferenceComponent', () => {
  let component: WorkshopandconferenceComponent;
  let fixture: ComponentFixture<WorkshopandconferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopandconferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopandconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
