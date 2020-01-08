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
const proposals_resolvers_1 = require("./proposals.resolvers");
const proposals_service_1 = require("./proposals.service");
const proposals_entity_1 = require("./proposals.entity");
let ProposalsModule = class ProposalsModule {
};
ProposalsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([proposals_entity_1.ProposalsEntity])],
        providers: [proposals_service_1.ProposalsService, proposals_resolvers_1.ProposalsResolvers],
    })
], ProposalsModule);
exports.ProposalsModule = ProposalsModule;
//# sourceMappingURL=proposals.module.js.map