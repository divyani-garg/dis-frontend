import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeScholarshipComponent } from './me-scholarship.component';

describe('MeScholarshipComponent', () => {
  let component: MeScholarshipComponent;
  let fixture: ComponentFixture<MeScholarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeScholarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
