import { UsersEntity } from '../users/users.entity';
import { RolesDto } from './dto/roles.dto';
import { Base } from '../common/entities/base.entity';
export declare class RolesEntity extends Base {
    name: string;
    users: UsersEntity[];
    toResponseObject(): RolesDto;
}
