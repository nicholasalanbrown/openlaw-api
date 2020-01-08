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
const users_entity_1 = require("./users.entity");
const roles_entity_1 = require("../roles/roles.entity");
let UsersService = class UsersService {
    constructor(userRepository, rolesRepository) {
        this.userRepository = userRepository;
        this.rolesRepository = rolesRepository;
    }
    findAll(page = 1, limit = 20, newest = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.find({
                relations: ['role', 'messages'],
                take: limit,
                skip: limit * (page - 1),
                order: newest && { updatedAt: 'DESC' },
            });
            return users.map(user => user.toResponseObject(false));
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: { id },
                relations: ['role', 'messages'],
            });
            return user.toResponseObject(false);
        });
    }
    validateUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOneById(payload.id);
        });
    }
    read(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: { username },
                relations: ['role', 'messages'],
            });
            return user.toResponseObject(false);
        });
    }
    signIn(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { login, password } = data;
            const user = yield this.userRepository.findOne({
                where: [{ username: login }, { email: login }],
                relations: ['role'],
            });
            if (!user || !(yield user.comparePassword(password))) {
                throw new common_1.HttpException('Invalid username/password', common_1.HttpStatus.BAD_REQUEST);
            }
            return user.toResponseObject();
        });
    }
    signUp(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email } = data;
            let user = yield this.userRepository.findOne({
                where: [{ username }, { email }],
                relations: ['role'],
            });
            if (user) {
                throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            const role = yield this.rolesRepository.findOne({
                name: 'USER',
            });
            user = yield this.userRepository.create(Object.assign({}, data, { role }));
            yield this.userRepository.save(user);
            return user.toResponseObject();
        });
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email, roleName } = data;
            let user = yield this.userRepository.findOne({
                where: [{ username }, { email }],
            });
            if (user) {
                throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            const role = roleName
                ? yield this.rolesRepository.findOne({
                    name: roleName,
                })
                : yield this.rolesRepository.findOne({
                    name: 'USER',
                });
            const password = '12345678';
            data.password = password;
            delete data.roleName;
            user = yield this.userRepository.create(Object.assign({}, data, { role }));
            yield this.userRepository.save(user);
            return user.toResponseObject();
        });
    }
    updateUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, roleName } = data;
            let user = yield this.userRepository.findOne({
                where: { id },
            });
            const role = yield this.rolesRepository.findOne({
                name: roleName,
            });
            if (!user) {
                throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
            }
            delete data.roleName;
            delete data.id;
            yield this.userRepository.update({ id }, Object.assign({}, data, { role }));
            user = yield this.userRepository.findOne({
                where: { id },
                relations: ['role', 'messages'],
            });
            return user.toResponseObject();
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: { id },
            });
            if (!user) {
                throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
            }
            const deletedUser = yield this.userRepository.remove(user);
            return !deletedUser.id;
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_entity_1.UsersEntity)),
    __param(1, typeorm_1.InjectRepository(roles_entity_1.RolesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map