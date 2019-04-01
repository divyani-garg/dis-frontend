import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialvisitComponent } from './industrialvisit.component';

describe('IndustrialvisitComponent', () => {
  let component: IndustrialvisitComponent;
  let fixture: ComponentFixture<IndustrialvisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrialvisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
