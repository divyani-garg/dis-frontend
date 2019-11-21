import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTTComponent } from './quiz-tt.component';

describe('QuizTTComponent', () => {
  let component: QuizTTComponent;
  let fixture: ComponentFixture<QuizTTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
