import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidtermTTComponent } from './midterm-tt.component';

describe('MidtermTTComponent', () => {
  let component: MidtermTTComponent;
  let fixture: ComponentFixture<MidtermTTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidtermTTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidtermTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
