import { HodInfrastuctureModule } from './hod-infrastucture.module';

describe('HodInfrastuctureModule', () => {
  let hodInfrastuctureModule: HodInfrastuctureModule;

  beforeEach(() => {
    hodInfrastuctureModule = new HodInfrastuctureModule();
  });

  it('should create an instance', () => {
    expect(hodInfrastuctureModule).toBeTruthy();
  });
});
