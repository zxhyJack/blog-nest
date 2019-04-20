import { Test, TestingModule } from '@nestjs/testing';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Request from 'supertest'
import { Blog } from './blog.entity';
import { join } from 'path'

describe('AppController', () => {
  let blogController: BlogController;

  beforeAll(async () => {
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

  // afterAll(async () => {
  //   app.close();
  // });

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
      console.log(111);

      expect((await blogController.getBlog())[0]).toEqual(mock[0]);
    });

    it('add blog', async () => {
      const blog = {
        "title": "test-title",
        "abstract": "abstract",
        "content": "content",
        "label": "label"
      }
      
      let res = await blogController.addBlog(blog)
      console.log(res);
      // expect((await blogController.getBlog())[0]).toEqual(mock[0]);
    });

    // it('', async () => {
    //   let result = 
    // })


  });
});
