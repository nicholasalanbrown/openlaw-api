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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
const base_entity_1 = require("../common/entities/base.entity");
let MessagesEntity = class MessagesEntity extends base_entity_1.Base {
    toResponseObject() {
        const { id, text, createdAt, updatedAt } = this;
        const responseObject = {
            id,
            text,
            createdAt,
            updatedAt,
        };
        if (this.user) {
            responseObject.user = this.user;
        }
        return responseObject;
    }
};
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], MessagesEntity.prototype, "text", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_entity_1.UsersEntity, user => user.messages),
    __metadata("design:type", users_entity_1.UsersEntity)
], MessagesEntity.prototype, "user", void 0);
MessagesEntity = __decorate([
    typeorm_1.Entity('message')
], MessagesEntity);
exports.MessagesEntity = MessagesEntity;
//# sourceMappingURL=messages.entity.js.map