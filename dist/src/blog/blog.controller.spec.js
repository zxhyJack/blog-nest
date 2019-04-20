"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const blog_controller_1 = require("./blog.controller");
const blog_service_1 = require("./blog.service");
const typeorm_1 = require("@nestjs/typeorm");
const blog_entity_1 = require("./blog.entity");
const path_1 = require("path");
describe('AppController', () => {
    let blogController;
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        const app = yield testing_1.Test.createTestingModule({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'root',
                    password: '123456',
                    database: 'blog',
                    entities: [path_1.join(__dirname, '**/**.entity{.ts,.js}')],
                    synchronize: true,
                }),
                typeorm_1.TypeOrmModule.forFeature([blog_entity_1.Blog]),
            ],
            controllers: [blog_controller_1.BlogController],
            providers: [blog_service_1.BlogService],
        }).compile();
        blogController = app.get(blog_controller_1.BlogController);
    }));
    describe('root', () => {
        it('should return blog', () => __awaiter(this, void 0, void 0, function* () {
            const mock = [{
                    "id": 1,
                    "title": "title",
                    "abstract": "abstract",
                    "content": "content",
                    "time": new Date("2019-04-17T06:29:13.949Z"),
                    "label": "label"
                }];
            expect((yield blogController.getBlog())[0]).toEqual(mock[0]);
        }));
        it('add blog', () => __awaiter(this, void 0, void 0, function* () {
            const blog = {
                "title": "test-title",
                "abstract": "abstract",
                "content": "content",
                "label": "label"
            };
            yield blogController.addBlog(blog);
        }));
    });
});
//# sourceMappingURL=blog.controller.spec.js.map