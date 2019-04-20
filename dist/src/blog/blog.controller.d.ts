import { AppService } from './blog.service';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
}
export declare class BlogController {
    private readonly BlogService;
    constructor(BlogService: BlogService);
    getBlog(): Promise<Blog[]>;
    addBlog(body: any): Promise<Blog>;
}
