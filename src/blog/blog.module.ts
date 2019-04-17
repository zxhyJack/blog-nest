import { Module } from '@nestjs/common';
import { AppController, BlogController } from './blog.controller';
import { AppService, BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [AppController, BlogController],
  providers: [AppService, BlogService],
})
export class BlogModule { }
