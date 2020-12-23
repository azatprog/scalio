import { BadRequestException, Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from './models/post.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/ping")
  ping(): string {
    return this.appService.pong();
  }
  
  @Get('/posts')
  getPosts(): Post[] {
    return this.appService.getPosts();
  }
  
  @Get('/posts/:id')
  getPostById(@Param() params): Post {
    let isNumberOnly = /^\d+$/.test(params.id);
    if (!isNumberOnly) throw new BadRequestException('Post id shall contain only numbers');
    const postId = parseInt(params.id, 10);
    const post = this.appService.getPostById(postId);
    if (post === undefined) throw new NotFoundException(`Post by id ${postId} not found`);
    return post;
  }
}
