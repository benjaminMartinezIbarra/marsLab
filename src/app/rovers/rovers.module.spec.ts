import { RoversModule } from './rovers.module';

describe('RoversModule', () => {
  let roversModule: RoversModule;

  beforeEach(() => {
    roversModule = new RoversModule();
  });

  it('should create an instance', () => {
    expect(roversModule).toBeTruthy();
  });
});
