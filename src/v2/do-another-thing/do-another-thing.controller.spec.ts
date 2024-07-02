import { Test, TestingModule } from '@nestjs/testing';
import { DoAnotherThingController } from './do-another-thing.controller';

describe('DoAnotherThingController', () => {
  let controller: DoAnotherThingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoAnotherThingController],
    }).compile();

    controller = module.get<DoAnotherThingController>(DoAnotherThingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
