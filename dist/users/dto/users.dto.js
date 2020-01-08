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
const class_validator_1 = require("class-validator");
class UserDto {
}
exports.UserDto = UserDto;
class SignUpUserDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SignUpUserDto.prototype, "firstName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SignUpUserDto.prototype, "lastName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SignUpUserDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SignUpUserDto.prototype, "username", void 0);
__decorate([
    class_validator_1.Length(7, 100),
    __metadata("design:type", String)
], SignUpUserDto.prototype, "password", void 0);
exports.SignUpUserDto = SignUpUserDto;
class SignInUserDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SignInUserDto.prototype, "login", void 0);
__decorate([
    class_validator_1.Length(7, 100),
    __metadata("design:type", String)
], SignInUserDto.prototype, "password", void 0);
exports.SignInUserDto = SignInUserDto;
class CreateUpdateUserDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUpdateUserDto.prototype, "firstName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUpdateUserDto.prototype, "lastName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUpdateUserDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUpdateUserDto.prototype, "username", void 0);
exports.CreateUpdateUserDto = CreateUpdateUserDto;
class CreateUser {
    constructor(id, firstName, lastName, email, username, password, createdAt) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.createdAt = createdAt;
    }
}
exports.CreateUser = CreateUser;
class Token {
}
exports.Token = Token;
//# sourceMappingURL=users.dto.js.map