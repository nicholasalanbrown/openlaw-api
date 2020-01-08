import { UsersEntity } from '../users/users.entity';
import { MessagesDto } from './dto/messages.dto';
import { Base } from '../common/entities/base.entity';
export declare class MessagesEntity extends Base {
    text: string;
    user: UsersEntity;
    toResponseObject(): MessagesDto;
}
