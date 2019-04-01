import { TestBed } from '@angular/core/testing';

import { StudentSignUpService } from './student-sign-up.service';

describe('StudentSignUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentSignUpService = TestBed.get(StudentSignUpService);
    expect(service).toBeTruthy();
  });
});
