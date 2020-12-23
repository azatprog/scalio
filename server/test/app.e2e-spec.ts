import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { POSTS } from './../src/models/constants.model';
import { Post } from './../src/models/post.model';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let postIds: number[];

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    postIds = POSTS.map(post => post.id);
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ping (GET)', () => {
    return request(app.getHttpServer())
      .get('/ping')
      .expect(200)
      .expect('pong');
  });
  
  it('/posts (GET)', ()=> {
    return request(app.getHttpServer())
    .get('/posts')
    .expect(200)
    .expect((res: Post[]) => res.length === POSTS.length && res.every(r => postIds.includes(r.id)));
  });
  
  it('/posts/1 (GET)', ()=> {
    return request(app.getHttpServer())
    .get('/posts/1')
    .expect(200)
    .expect((res: Post) => res.id === 1);
  });
  
  it('/posts/a1bc (GET)', ()=> {
    return request(app.getHttpServer())
    .get('/posts/a1bc')
    .expect(400)
  });
  
  it('/posts/11010 (GET)', ()=> {
    return request(app.getHttpServer())
    .get('/posts/11010')
    .expect(404)
  });
  
  afterAll(async () => {
    await app.close();
  });
});
