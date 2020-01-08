import { UsersEntity } from '../../users/users.entity';
export declare class RolesDto {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    users?: UsersEntity[];
}
