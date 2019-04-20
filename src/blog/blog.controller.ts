import { Controller, Get, Post, Body, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './blog.service';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity'
import { AuthGuard } from '@nestjs/passport';
import { AddBlogDto } from './dto/blog.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  // @UseGuards(AuthGuard())
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('blog')
export class BlogController {
  constructor(private readonly BlogService: BlogService) { }

  @Get()
  // @UseGuards(AuthGuard())
  getBlog(): Promise<Blog[]> {
    return this.BlogService.getBlog();
  }

  @Post()
  @UsePipes(ValidationPipe)
  addBlog(@Body() body: AddBlogDto) {
    return this.BlogService.addBlog(body.title, body.content, body.abstract, body.label);
  }


}
