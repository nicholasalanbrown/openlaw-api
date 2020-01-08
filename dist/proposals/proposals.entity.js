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
const base_entity_1 = require("../common/entities/base.entity");
let ProposalsEntity = class ProposalsEntity extends base_entity_1.Base {
};
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], ProposalsEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], ProposalsEntity.prototype, "slug", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], ProposalsEntity.prototype, "gitlabProjectId", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProposalsEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProposalsEntity.prototype, "summary", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], ProposalsEntity.prototype, "legal", void 0);
ProposalsEntity = __decorate([
    typeorm_1.Entity('proposal')
], ProposalsEntity);
exports.ProposalsEntity = ProposalsEntity;
//# sourceMappingURL=proposals.entity.js.map