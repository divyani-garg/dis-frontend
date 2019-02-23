import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalTTComponent } from './practical-tt.component';

describe('PracticalTTComponent', () => {
  let component: PracticalTTComponent;
  let fixture: ComponentFixture<PracticalTTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticalTTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
