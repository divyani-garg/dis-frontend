import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeSchlorshipDetailsComponent } from './me-schlorship-details.component';

describe('MeSchlorshipDetailsComponent', () => {
  let component: MeSchlorshipDetailsComponent;
  let fixture: ComponentFixture<MeSchlorshipDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeSchlorshipDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeSchlorshipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
