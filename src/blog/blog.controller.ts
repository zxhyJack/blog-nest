import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './blog.service';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity'

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('blog')
export class BlogController {
  constructor(private readonly BlogService: BlogService) { }

  @Get()
  getBlog(): Promise<Blog[]> {
    return this.BlogService.getBlog();
  }

  @Post()
  addBlog(@Body() body) {
    return this.BlogService.addBlog(body.title, body.content, body.abstract, body.label);
  }


}
