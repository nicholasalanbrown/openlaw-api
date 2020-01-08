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
let RolesEntity = class RolesEntity extends base_entity_1.Base {
    toResponseObject() {
        const { id, name, createdAt, updatedAt } = this;
        const responseObject = {
            id,
            name,
            createdAt,
            updatedAt,
        };
        if (this.users) {
            responseObject.users = this.users;
        }
        return responseObject;
    }
};
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], RolesEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(type => users_entity_1.UsersEntity, user => user.role),
    __metadata("design:type", Array)
], RolesEntity.prototype, "users", void 0);
RolesEntity = __decorate([
    typeorm_1.Entity('role')
], RolesEntity);
exports.RolesEntity = RolesEntity;
//# sourceMappingURL=roles.entity.js.map