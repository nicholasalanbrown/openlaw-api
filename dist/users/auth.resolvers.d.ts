import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';
export declare class AuthResolvers {
    private readonly usersService;
    constructor(usersService: UsersService);
    me(me: any): Promise<UserDto>;
    signIn(login: string, password: string): Promise<UserDto>;
    signUp(firstName: string, lastName: string, email: string, username: string, password: string): Promise<UserDto>;
}
