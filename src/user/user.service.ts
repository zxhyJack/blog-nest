import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

  signin(username: string, password: string): boolean {
    if (username === 'xiaoming' && password === '123456') {
      return true;
    } else {
      return false;
    }
  }
}