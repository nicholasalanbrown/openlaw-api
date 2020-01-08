import { UsersService } from './users.service';
import { CreateUpdateUserDto, UserDto } from './dto/users.dto';
export declare class UsersResolvers {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page: number, limit: number, newest: boolean): Promise<UserDto[]>;
    findOneById(id: string): Promise<UserDto>;
    createUser(args: CreateUpdateUserDto): Promise<UserDto>;
    updateUser(args: CreateUpdateUserDto): Promise<UserDto>;
    deleteUser(id: string): Promise<boolean>;
}
