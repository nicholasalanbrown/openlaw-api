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
const graphql_subscriptions_1 = require("graphql-subscriptions");
const proposals_service_1 = require("./proposals.service");
const auth_guard_1 = require("../auth/auth.guard");
const pubSub = new graphql_subscriptions_1.PubSub();
let ProposalsResolvers = class ProposalsResolvers {
    constructor(proposalsService) {
        this.proposalsService = proposalsService;
    }
    getProposals() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.proposalsService.findAll();
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.proposalsService.findOneById(id);
        });
    }
    findOneBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.proposalsService.findOneBySlug(slug);
        });
    }
    createProposal(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.proposalsService.createProposal(title);
        });
    }
    createBranch(id, newBranchName, sourceBranchName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.proposalsService.createBranch(id, newBranchName, sourceBranchName);
        });
    }
    commitToBranch(proposalId, branchName, message, title, description, summary, legal) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.proposalsService.commitToBranch(proposalId, branchName, message, title, description, summary, legal);
        });
    }
    deleteBranch(proposalId, branchName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.proposalsService.deleteBranch(proposalId, branchName);
        });
    }
    updateProposal(id, title) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.proposalsService.updateProposal(id, title);
        });
    }
    deleteProposal(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.proposalsService.deleteProposal(id);
        });
    }
};
__decorate([
    graphql_1.Query('proposals'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProposalsResolvers.prototype, "getProposals", null);
__decorate([
    common_1.UseGuards(auth_guard_1.GqlAuthGuard),
    graphql_1.Query('proposal'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProposalsResolvers.prototype, "findOneById", null);
__decorate([
    graphql_1.Query('proposalBySlug'),
    __param(0, graphql_1.Args('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProposalsResolvers.prototype, "findOneBySlug", null);
__decorate([
    graphql_1.Mutation('createProposal'),
    __param(0, graphql_1.Args('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProposalsResolvers.prototype, "createProposal", null);
__decorate([
    graphql_1.Mutation('createBranch'),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('newBranchName')),
    __param(2, graphql_1.Args('sourceBranchName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ProposalsResolvers.prototype, "createBranch", null);
__decorate([
    graphql_1.Mutation('commitToBranch'),
    __param(0, graphql_1.Args('proposalId')),
    __param(1, graphql_1.Args('branchName')),
    __param(2, graphql_1.Args('message')),
    __param(3, graphql_1.Args('title')),
    __param(4, graphql_1.Args('description')),
    __param(5, graphql_1.Args('summary')),
    __param(6, graphql_1.Args('legal')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ProposalsResolvers.prototype, "commitToBranch", null);
__decorate([
    graphql_1.Mutation('deleteBranch'),
    __param(0, graphql_1.Args('proposalId')),
    __param(1, graphql_1.Args('branchName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProposalsResolvers.prototype, "deleteBranch", null);
__decorate([
    graphql_1.Mutation('updateProposal'),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProposalsResolvers.prototype, "updateProposal", null);
__decorate([
    graphql_1.Mutation('deleteRole'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProposalsResolvers.prototype, "deleteProposal", null);
ProposalsResolvers = __decorate([
    graphql_1.Resolver('Proposal'),
    __metadata("design:paramtypes", [proposals_service_1.ProposalsService])
], ProposalsResolvers);
exports.ProposalsResolvers = ProposalsResolvers;
//# sourceMappingURL=proposals.resolvers.js.map