import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerClubComponent } from './computer-club.component';

describe('ComputerClubComponent', () => {
  let component: ComputerClubComponent;
  let fixture: ComponentFixture<ComputerClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
