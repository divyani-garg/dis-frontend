import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodInfrastructureComponent } from './hod-infrastructure.component';

describe('HodInfrastructureComponent', () => {
  let component: HodInfrastructureComponent;
  let fixture: ComponentFixture<HodInfrastructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodInfrastructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
