import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppService],
      providers: [AppService],
    }).compile();
  });

  describe('ping', () => {
    it('should return "pong"', () => {
      const appService = app.get<AppService>(AppService);
      expect(appService.pong()).toBe('pong');
    });
  });
  
  describe('get post by id', () => {
    it('should return post with id=1 when /posts/1', () => {
      const appService = app.get<AppService>(AppService);
      expect(appService.getPostById(1).id === 1).toBeTruthy;
    });
  });
});
