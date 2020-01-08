import { JwtPayload } from './jwt-payload.interface';
export declare class AuthService {
    constructor();
    createToken(jwtPayload: JwtPayload): string;
}
