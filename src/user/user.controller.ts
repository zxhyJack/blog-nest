import { Controller, Post, Body, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from './user.service'
import { SigninDto } from "./dto/signin.dto";
import { SignupDto } from "./dto/signup.dto";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('signin')
  @UsePipes(ValidationPipe)          // 输入参数的验证
  signin(@Body() body: SigninDto) {
    return this.userService.signin(body.username, body.password)
  }

  @Post('signup')
  @UsePipes(ValidationPipe)
  signup(@Body() body: SignupDto) {
    console.log(body)
  }
}