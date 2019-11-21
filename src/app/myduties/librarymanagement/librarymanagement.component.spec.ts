import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarymanagementComponent } from './librarymanagement.component';

describe('LibrarymanagementComponent', () => {
  let component: LibrarymanagementComponent;
  let fixture: ComponentFixture<LibrarymanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarymanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
