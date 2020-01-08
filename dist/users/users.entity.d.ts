import { UserDto } from './dto/users.dto';
import { RolesEntity } from '../roles/roles.entity';
import { MessagesEntity } from '../messages/messages.entity';
import { Base } from '../common/entities/base.entity';
export declare class UsersEntity extends Base {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    role: RolesEntity;
    messages: MessagesEntity[];
    hashPassword(): Promise<void>;
    comparePassword(attempt: string): Promise<boolean>;
    toResponseObject(showToken?: boolean): UserDto;
    private readonly token;
}
