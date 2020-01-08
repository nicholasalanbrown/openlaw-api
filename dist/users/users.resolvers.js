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
const users_service_1 = require("./users.service");
const users_dto_1 = require("./dto/users.dto");
const auth_guard_1 = require("../auth/guards/auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorators_1 = require("../decorators/roles.decorators");
let UsersResolvers = class UsersResolvers {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getUsers(page, limit, newest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.findAll();
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.findOneById(id);
        });
    }
    createUser(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdUser = yield this.usersService.createUser(args);
            return createdUser;
        });
    }
    updateUser(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield this.usersService.updateUser(args);
            return updatedUser;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.deleteUser(id);
        });
    }
};
__decorate([
    graphql_1.Query('users'),
    roles_decorators_1.Roles('ADMIN'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Args('page')),
    __param(1, graphql_1.Args('limit')),
    __param(2, graphql_1.Args('newest')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Boolean]),
    __metadata("design:returntype", Promise)
], UsersResolvers.prototype, "getUsers", null);
__decorate([
    graphql_1.Query('user'),
    roles_decorators_1.Roles('ADMIN', 'USER'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolvers.prototype, "findOneById", null);
__decorate([
    graphql_1.Mutation('createUser'),
    roles_decorators_1.Roles('ADMIN'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Args('createUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.CreateUpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersResolvers.prototype, "createUser", null);
__decorate([
    graphql_1.Mutation('updateUser'),
    roles_decorators_1.Roles('ADMIN'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Args('updateUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.CreateUpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersResolvers.prototype, "updateUser", null);
__decorate([
    graphql_1.Mutation('deleteUser'),
    roles_decorators_1.Roles('ADMIN'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolvers.prototype, "deleteUser", null);
UsersResolvers = __decorate([
    graphql_1.Resolver('User'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolvers);
exports.UsersResolvers = UsersResolvers;
//# sourceMappingURL=users.resolvers.js.map