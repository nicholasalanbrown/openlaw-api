import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { CreateUpdateUserDto, SignInUserDto, SignUpUserDto, UserDto } from './dto/users.dto';
import { RolesEntity } from '../roles/roles.entity';
import { JwtPayload } from '../auth/jwt-payload.interface';
export declare class UsersService {
    private userRepository;
    private rolesRepository;
    constructor(userRepository: Repository<UsersEntity>, rolesRepository: Repository<RolesEntity>);
    findAll(page?: number, limit?: number, newest?: boolean): Promise<UserDto[]>;
    findOneById(id: string): Promise<UserDto>;
    validateUser(payload: JwtPayload): Promise<UserDto>;
    read(username: string): Promise<UserDto>;
    signIn(data: SignInUserDto): Promise<UserDto>;
    signUp(data: SignUpUserDto): Promise<UserDto>;
    createUser(data: CreateUpdateUserDto): Promise<UserDto>;
    updateUser(data: CreateUpdateUserDto): Promise<UserDto>;
    deleteUser(id: string): Promise<boolean>;
}
