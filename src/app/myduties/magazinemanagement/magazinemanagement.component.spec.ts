import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinemanagementComponent } from './magazinemanagement.component';

describe('MagazinemanagementComponent', () => {
  let component: MagazinemanagementComponent;
  let fixture: ComponentFixture<MagazinemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazinemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
