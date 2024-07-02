import { Test, TestingModule } from '@nestjs/testing';
import { DoSomethingController } from './do-something.controller';

describe('DoSomethingController', () => {
  let controller: DoSomethingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoSomethingController],
    }).compile();

    controller = module.get<DoSomethingController>(DoSomethingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
