import { Repository } from 'typeorm';
import { MessagesEntity } from './messages.entity';
import { UsersEntity } from '../users/users.entity';
import { JwtPayload } from '../auth/jwt-payload.interface';
export declare class MessagesService {
    private messagesRepository;
    private userRepository;
    constructor(messagesRepository: Repository<MessagesEntity>, userRepository: Repository<UsersEntity>);
    findAll(page?: number, limit?: number, newest?: boolean): Promise<{
        edges: import("./dto/messages.dto").MessagesDto[];
        pageInfo: {
            page: number;
            limit: number;
        };
    }>;
    findOneById(id: string): Promise<import("./dto/messages.dto").MessagesDto>;
    createMessage(text: string, userId: string): Promise<import("./dto/messages.dto").MessagesDto>;
    updateMessage(id: string, text: string, me: JwtPayload): Promise<import("./dto/messages.dto").MessagesDto>;
    deleteMessage(id: string, me: JwtPayload): Promise<import("./dto/messages.dto").MessagesDto>;
}
