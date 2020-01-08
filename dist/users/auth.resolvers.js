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
const auth_guard_1 = require("../auth/guards/auth.guard");
let AuthResolvers = class AuthResolvers {
    constructor(usersService) {
        this.usersService = usersService;
    }
    me(me) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = me;
            return yield this.usersService.read(username);
        });
    }
    signIn(login, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = { login, password };
            return yield this.usersService.signIn(user);
        });
    }
    signUp(firstName, lastName, email, username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = {
                firstName,
                lastName,
                email,
                username,
                password,
            };
            return yield this.usersService.signUp(user);
        });
    }
};
__decorate([
    graphql_1.Query('me'),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __param(0, graphql_1.Context('me')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolvers.prototype, "me", null);
__decorate([
    graphql_1.Mutation('signIn'),
    __param(0, graphql_1.Args('login')),
    __param(1, graphql_1.Args('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthResolvers.prototype, "signIn", null);
__decorate([
    graphql_1.Mutation('signUp'),
    __param(0, graphql_1.Args('firstName')),
    __param(1, graphql_1.Args('lastName')),
    __param(2, graphql_1.Args('email')),
    __param(3, graphql_1.Args('username')),
    __param(4, graphql_1.Args('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], AuthResolvers.prototype, "signUp", null);
AuthResolvers = __decorate([
    graphql_1.Resolver('User'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthResolvers);
exports.AuthResolvers = AuthResolvers;
//# sourceMappingURL=auth.resolvers.js.map