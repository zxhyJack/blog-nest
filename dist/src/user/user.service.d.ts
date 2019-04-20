import { Repository } from 'typeorm';
import { User } from "./user.entity";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    signin(username: string, password: string): boolean;
}
