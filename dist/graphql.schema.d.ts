export declare class CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    roleName?: string;
}
export declare class UpdateUseInput {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    roleName: string;
}
export declare class Message {
    id: string;
    text: string;
    createdAt: string;
    updatedAt: string;
    user: User;
}
export declare class MessageConnection {
    edges: Message[];
    pageInfo: PageInfo;
}
export declare class MessageCreated {
    message: Message;
    messages: MessageConnection;
}
export declare abstract class IMutation {
    abstract createMessage(text: string): Message | Promise<Message>;
    abstract updateMessage(id: string, text: string): Message | Promise<Message>;
    abstract deleteMessage(id: string): boolean | Promise<boolean>;
    abstract createProposal(title: string): Proposal | Promise<Proposal>;
    abstract createBranch(id: string, newBranchName: string, sourceBranchName: string): Proposal | Promise<Proposal>;
    abstract commitToBranch(proposalId: string, branchName: string, message: string, title: string, description: string, summary: string, legal: string): Proposal | Promise<Proposal>;
    abstract deleteBranch(proposalId: string, branchName: string): Proposal | Promise<Proposal>;
    abstract updateProposal(id: string, title: string): Proposal | Promise<Proposal>;
    abstract deleteProposal(id: string): boolean | Promise<boolean>;
    abstract createRole(name: string): Role | Promise<Role>;
    abstract updateRole(id: string, name: string): Role | Promise<Role>;
    abstract deleteRole(id: string): boolean | Promise<boolean>;
    abstract signIn(login: string, password: string): Token | Promise<Token>;
    abstract signUp(firstName: string, lastName: string, email: string, username: string, password: string): Token | Promise<Token>;
    abstract createUser(createUserInput?: CreateUserInput): User | Promise<User>;
    abstract updateUser(updateUserInput?: UpdateUseInput): User | Promise<User>;
    abstract deleteUser(id: string): boolean | Promise<boolean>;
}
export declare class PageInfo {
    page: number;
    limit: number;
}
export declare class Proposal {
    id: string;
    title: string;
    slug: string;
    gitlabProjectId: number;
    createdAt: string;
    updatedAt: string;
}
export declare abstract class IQuery {
    abstract messages(page?: number, limit?: number, newest?: boolean): MessageConnection | Promise<MessageConnection>;
    abstract message(id: string): Message | Promise<Message>;
    abstract proposals(): Proposal[] | Promise<Proposal[]>;
    abstract proposal(id: string): Proposal | Promise<Proposal>;
    abstract proposalBySlug(slug: string): Proposal | Promise<Proposal>;
    abstract roles(): Role[] | Promise<Role[]>;
    abstract role(id: string): Role | Promise<Role>;
    abstract users(): User[] | Promise<User[]>;
    abstract user(id: string): User | Promise<User>;
    abstract me(): User | Promise<User>;
}
export declare class Role {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}
export declare abstract class ISubscription {
    abstract messageCreated(): Message | Promise<Message>;
}
export declare class Token {
    token: string;
}
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    username?: string;
    email: string;
    role: Role;
    createdAt: string;
    updatedAt: string;
    messages?: Message[];
}
