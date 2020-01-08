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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const class_validator_1 = require("class-validator");
const roles_entity_1 = require("../roles/roles.entity");
const messages_entity_1 = require("../messages/messages.entity");
const environment_1 = require("../environments/environment");
const base_entity_1 = require("../common/entities/base.entity");
let UsersEntity = class UsersEntity extends base_entity_1.Base {
    hashPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = bcrypt.genSaltSync(environment_1.environment.saltOrRounds);
            this.password = yield bcrypt.hashSync(this.password, salt);
        });
    }
    comparePassword(attempt) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt.compareSync(attempt, this.password);
        });
    }
    toResponseObject(showToken = true) {
        const { id, firstName, lastName, username, email, createdAt, updatedAt, token, } = this;
        const responseObject = {
            id,
            firstName,
            lastName,
            username,
            email,
            createdAt,
            updatedAt,
        };
        if (this.messages) {
            responseObject.messages = this.messages;
        }
        if (this.role) {
            responseObject.role = this.role;
        }
        if (showToken) {
            responseObject.token = token;
        }
        return responseObject;
    }
    get token() {
        const { id, username, role } = this;
        return jwt.sign({
            id,
            username,
            roleName: role.name,
        }, environment_1.environment.secret, { expiresIn: environment_1.environment.expiresIn });
    }
};
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], UsersEntity.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], UsersEntity.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text',
        unique: true,
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text',
        unique: true,
    }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('text'),
    class_validator_1.Length(7, 100),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.ManyToOne(type => roles_entity_1.RolesEntity, role => role.users),
    __metadata("design:type", roles_entity_1.RolesEntity)
], UsersEntity.prototype, "role", void 0);
__decorate([
    typeorm_1.OneToMany(type => messages_entity_1.MessagesEntity, messages => messages.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], UsersEntity.prototype, "messages", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersEntity.prototype, "hashPassword", null);
UsersEntity = __decorate([
    typeorm_1.Entity('user')
], UsersEntity);
exports.UsersEntity = UsersEntity;
//# sourceMappingURL=users.entity.js.map