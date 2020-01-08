"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_resolvers_1 = require("./users.resolvers");
const users_service_1 = require("./users.service");
const roles_entity_1 = require("../roles/roles.entity");
const users_entity_1 = require("./users.entity");
const messages_entity_1 = require("../messages/messages.entity");
const auth_resolvers_1 = require("./auth.resolvers");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([users_entity_1.UsersEntity, roles_entity_1.RolesEntity, messages_entity_1.MessagesEntity]),
        ],
        providers: [users_service_1.UsersService, users_resolvers_1.UsersResolvers, auth_resolvers_1.AuthResolvers],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map