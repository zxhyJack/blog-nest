import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    createToken(): Promise<{
        expiresIn: number;
        accessToken: string;
    }>;
    validateUser(payload: JwtPayload): Promise<any>;
}
