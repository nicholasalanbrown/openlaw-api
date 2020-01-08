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
const roles_entity_1 = require("./roles.entity");
let RolesService = class RolesService {
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    findAll(page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const roles = yield this.rolesRepository.find();
            return roles.map(role => role.toResponseObject());
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield this.rolesRepository.findOne({
                where: { id },
            });
            return role.toResponseObject();
        });
    }
    createRole(name) {
        return __awaiter(this, void 0, void 0, function* () {
            let role = yield this.rolesRepository.findOne({
                where: [{ name }],
            });
            if (role) {
                throw new common_1.HttpException('Role already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            role = yield this.rolesRepository.create({ name });
            yield this.rolesRepository.save(role);
            return role.toResponseObject();
        });
    }
    updateRole(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let role = yield this.rolesRepository.findOne({
                where: { id },
            });
            if (!role) {
                throw new common_1.HttpException('Role not found', common_1.HttpStatus.NOT_FOUND);
            }
            yield this.rolesRepository.update({ id }, { name });
            role = yield this.rolesRepository.findOne({
                where: { id },
            });
            return role.toResponseObject();
        });
    }
    deleteRole(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield this.rolesRepository.findOne({
                where: { id },
            });
            if (!role) {
                throw new common_1.HttpException('Role not found', common_1.HttpStatus.NOT_FOUND);
            }
            yield this.rolesRepository.remove(role);
            return !role.id;
        });
    }
};
RolesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(roles_entity_1.RolesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map