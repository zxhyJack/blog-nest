import { Test, TestingModule } from '@nestjs/testing';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog.entity';
import { join } from 'path'

describe('AppController', () => {
  let blogController: BlogController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'root',
          password: '123456',
          database: 'blog',
          entities: [join(__dirname, '**/**.entity{.ts,.js}')],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Blog]),
      ],
      controllers: [BlogController],
      providers: [BlogService],
    }).compile();

    blogController = app.get<BlogController>(BlogController);
  });

  describe('root', () => {
    it('should return blog', async () => {
      const mock = [{
        "id": 1,
        "title": "title",
        "abstract": "abstract",
        "content": "content",
        "time": new Date("2019-04-17T06:29:13.949Z"),
        "label": "label"
      }]
      expect((await blogController.getBlog())[0]).toEqual(mock[0]);
    });
  });
});
