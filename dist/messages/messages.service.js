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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const messages_entity_1 = require("./messages.entity");
const users_entity_1 = require("../users/users.entity");
let MessagesService = class MessagesService {
    constructor(messagesRepository, userRepository) {
        this.messagesRepository = messagesRepository;
        this.userRepository = userRepository;
    }
    findAll(page = 1, limit = 20, newest = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const messages = yield this.messagesRepository.find({
                relations: ['user'],
                take: limit,
                skip: limit * (page - 1),
                order: newest && { updatedAt: 'DESC' },
            });
            return {
                edges: messages.map(message => message.toResponseObject()),
                pageInfo: {
                    page,
                    limit,
                },
            };
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.messagesRepository.findOne({
                where: { id },
                relations: ['user'],
            });
            return message.toResponseObject();
        });
    }
    createMessage(text, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { id: userId } });
            let message = yield this.messagesRepository.create({ text, user });
            yield this.messagesRepository.save(message);
            message = yield this.messagesRepository.findOne({
                where: { id: message.id },
                relations: ['user'],
            });
            return message.toResponseObject();
        });
    }
    updateMessage(id, text, me) {
        return __awaiter(this, void 0, void 0, function* () {
            let message = yield this.messagesRepository.findOne({
                where: { id },
                relations: ['user'],
            });
            if (!message) {
                throw new common_1.HttpException('Message not found', common_1.HttpStatus.NOT_FOUND);
            }
            if (message.user.id !== me.id && me.roleName !== 'ADMIN') {
                throw new common_1.HttpException('Action not allowed', common_1.HttpStatus.FORBIDDEN);
            }
            yield this.messagesRepository.update({ id }, { text });
            message = yield this.messagesRepository.findOne({
                where: { id },
                relations: ['user'],
            });
            return message.toResponseObject();
        });
    }
    deleteMessage(id, me) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.messagesRepository.findOne({
                where: { id },
                relations: ['user'],
            });
            if (!message) {
                throw new common_1.HttpException('Message not found', common_1.HttpStatus.NOT_FOUND);
            }
            if (message.user.id !== me.id && me.roleName !== 'ADMIN') {
                throw new common_1.HttpException('Action not allowed', common_1.HttpStatus.FORBIDDEN);
            }
            yield this.messagesRepository.remove(message);
            return message.toResponseObject();
        });
    }
};
MessagesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(messages_entity_1.MessagesEntity)),
    __param(1, typeorm_1.InjectRepository(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map