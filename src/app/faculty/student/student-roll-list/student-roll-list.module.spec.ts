import { StudentRollListModule } from './student-roll-list.module';

describe('StudentRollListModule', () => {
  let studentRollListModule: StudentRollListModule;

  beforeEach(() => {
    studentRollListModule = new StudentRollListModule();
  });

  it('should create an instance', () => {
    expect(studentRollListModule).toBeTruthy();
  });
});
