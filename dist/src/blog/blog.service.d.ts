import { Repository } from 'typeorm';
import { Blog } from './blog.entity';
export declare class AppService {
    getHello(): string;
}
export declare class BlogService {
    private readonly blogRepository;
    constructor(blogRepository: Repository<Blog>);
    getBlog(): Promise<Blog[]>;
    addBlog(title: string, content: string, abstract: string, label: string): Promise<Blog>;
}
