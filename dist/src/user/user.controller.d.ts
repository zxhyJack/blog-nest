import { UserService } from './user.service';
import { SigninDto } from "./dto/signin.dto";
import { SignupDto } from "./dto/signup.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signin(body: SigninDto): boolean;
    signup(body: SignupDto): void;
}
