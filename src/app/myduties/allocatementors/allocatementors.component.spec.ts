import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatementorsComponent } from './allocatementors.component';

describe('AllocatementorsComponent', () => {
  let component: AllocatementorsComponent;
  let fixture: ComponentFixture<AllocatementorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocatementorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatementorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
