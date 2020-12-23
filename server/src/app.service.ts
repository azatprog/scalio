import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';
import { POSTS } from './models/constants.model';

@Injectable()
export class AppService {
  
  private post: Post[] = POSTS;
  
  pong(): string {
    return 'pong';
  }
  
  getPosts(): Post[] {
    return this.post;
  }
  
  getPostById(id: number): Post {
    return this.post.find(p => p.id === id);
  }
}
