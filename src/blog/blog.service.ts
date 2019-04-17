import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) { }

  async getBlog(): Promise<Blog[]> {
    return await this.blogRepository.find();
  }

  async addBlog(title: string, content: string, abstract: string, label: string): Promise<Blog> {
    let blog = new Blog()
    blog.title = title;
    blog.content = content;
    blog.abstract = abstract;
    blog.label = label;
    blog.time = new Date()
    return await this.blogRepository.save(blog);
  }
}

