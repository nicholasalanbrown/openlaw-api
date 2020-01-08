import { RolesEntity } from '../../roles/roles.entity';
import { MessagesEntity } from '../../messages/messages.entity';
export declare class UserDto {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    token?: string;
    role?: RolesEntity;
    messages?: MessagesEntity[];
}
export declare class SignUpUserDto {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}
export declare class SignInUserDto {
    login: string;
    password: string;
}
export declare class CreateUpdateUserDto {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password?: string;
    roleName?: string;
}
export declare class CreateUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    createdAt: Date;
    constructor(id: string, firstName: string, lastName: string, email: string, username: string, password: string, createdAt: Date);
}
export declare class Token {
    token: string;
}
