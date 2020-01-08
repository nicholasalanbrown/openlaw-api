import { UsersEntity } from '../../users/users.entity';
export declare class MessagesDto {
    id: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    user?: UsersEntity;
}
export declare class PageInfo {
    page: number;
    limit: number;
}
export declare class MessageConnection {
    edges: MessagesDto[];
    pageInfo: PageInfo;
}
