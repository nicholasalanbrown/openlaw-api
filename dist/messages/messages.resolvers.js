"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const messages_service_1 = require("./messages.service");
const auth_guard_1 = require("../auth/guards/auth.guard");
const roles_decorators_1 = require("../decorators/roles.decorators");
const roles_guard_1 = require("../auth/guards/roles.guard");
const pubSub = new graphql_subscriptions_1.PubSub();
let MessagesResolvers = class MessagesResolvers {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    getMessages(page, limit, newest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.messagesService.findAll(page, limit, newest);
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.messagesService.findOneById(id);
        });
    }
    createMessage(text, me) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = me.id;
            const createdMessage = yield this.messagesService.createMessage(text, userId);
            pubSub.publish('messageCreated', { messageCreated: createdMessage });
            return createdMessage;
        });
    }
    updateMessage(id, text, me) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedMessage = yield this.messagesService.updateMessage(id, text, me);
            pubSub.publish('messageCreated', { messageCreated: updatedMessage });
            return updatedMessage;
        });
    }
    deleteMessage(id, me) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedMessage = yield this.messagesService.deleteMessage(id, me);
            pubSub.publish('messageCreated', { messageCreated: deletedMessage });
            return !deletedMessage.id;
        });
    }
    messageCreated() {
        return {
            subscribe: () => pubSub.asyncIterator('messageCreated'),
        };
    }
};
__decorate([
    graphql_1.Query('messages'),
    roles_decorators_1.Roles('ADMIN', 'USER'),
    __param(0, graphql_1.Args('page')),
    __param(1, graphql_1.Args('limit')),
    __param(2, graphql_1.Args('newest')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Boolean]),
    __metadata("design:returntype", Promise)
], MessagesResolvers.prototype, "getMessages", null);
__decorate([
    graphql_1.Query('message'),
    roles_decorators_1.Roles('ADMIN', 'USER'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessagesResolvers.prototype, "findOneById", null);
__decorate([
    graphql_1.Mutation('createMessage'),
    roles_decorators_1.Roles('ADMIN', 'USER'),
    __param(0, graphql_1.Args('text')),
    __param(1, graphql_1.Context('me')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MessagesResolvers.prototype, "createMessage", null);
__decorate([
    graphql_1.Mutation('updateMessage'),
    roles_decorators_1.Roles('ADMIN', 'USER'),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('text')),
    __param(2, graphql_1.Context('me')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], MessagesResolvers.prototype, "updateMessage", null);
__decorate([
    graphql_1.Mutation('deleteMessage'),
    roles_decorators_1.Roles('ADMIN', 'USER'),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Context('me')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MessagesResolvers.prototype, "deleteMessage", null);
__decorate([
    graphql_1.Subscription(),
    roles_decorators_1.Roles('ADMIN', 'USER'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessagesResolvers.prototype, "messageCreated", null);
MessagesResolvers = __decorate([
    graphql_1.Resolver('Message'),
    common_1.UseGuards(new auth_guard_1.AuthGuard(), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesResolvers);
exports.MessagesResolvers = MessagesResolvers;
//# sourceMappingURL=messages.resolvers.js.map