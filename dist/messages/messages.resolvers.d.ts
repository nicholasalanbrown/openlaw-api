import { MessagesService } from './messages.service';
import { MessagesDto, MessageConnection } from './dto/messages.dto';
export declare class MessagesResolvers {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    getMessages(page: number, limit: number, newest: boolean): Promise<MessageConnection>;
    findOneById(id: string): Promise<MessagesDto>;
    createMessage(text: string, me: any): Promise<MessagesDto>;
    updateMessage(id: string, text: string, me: any): Promise<MessagesDto>;
    deleteMessage(id: string, me: any): Promise<boolean>;
    messageCreated(): {
        subscribe: () => AsyncIterator<unknown>;
    };
}
