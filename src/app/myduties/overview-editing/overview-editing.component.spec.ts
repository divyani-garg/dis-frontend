import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewEditingComponent } from './overview-editing.component';

describe('OverviewEditingComponent', () => {
  let component: OverviewEditingComponent;
  let fixture: ComponentFixture<OverviewEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
