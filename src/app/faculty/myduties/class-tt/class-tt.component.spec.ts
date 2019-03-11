import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTTComponent } from './class-tt.component';

describe('ClassTTComponent', () => {
  let component: ClassTTComponent;
  let fixture: ComponentFixture<ClassTTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
