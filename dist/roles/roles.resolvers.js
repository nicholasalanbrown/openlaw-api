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
const graphql_1 = require("@nestjs/graphql");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const roles_service_1 = require("./roles.service");
const roles_decorators_1 = require("../decorators/roles.decorators");
const pubSub = new graphql_subscriptions_1.PubSub();
let RolesResolvers = class RolesResolvers {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    getRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.rolesService.findAll();
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.rolesService.findOneById(id);
        });
    }
    createRole(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.rolesService.createRole(name);
        });
    }
    updateRole(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.rolesService.updateRole(id, name);
        });
    }
    deleteRole(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.rolesService.deleteRole(id);
        });
    }
};
__decorate([
    graphql_1.Query('roles'),
    roles_decorators_1.Roles('ADMIN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesResolvers.prototype, "getRoles", null);
__decorate([
    graphql_1.Query('role'),
    roles_decorators_1.Roles('ADMIN'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesResolvers.prototype, "findOneById", null);
__decorate([
    graphql_1.Mutation('createRole'),
    roles_decorators_1.Roles('ADMIN'),
    __param(0, graphql_1.Args('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesResolvers.prototype, "createRole", null);
__decorate([
    graphql_1.Mutation('updateRole'),
    roles_decorators_1.Roles('ADMIN'),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RolesResolvers.prototype, "updateRole", null);
__decorate([
    graphql_1.Mutation('deleteRole'),
    roles_decorators_1.Roles('ADMIN'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RolesResolvers.prototype, "deleteRole", null);
RolesResolvers = __decorate([
    graphql_1.Resolver('Role'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesResolvers);
exports.RolesResolvers = RolesResolvers;
//# sourceMappingURL=roles.resolvers.js.map