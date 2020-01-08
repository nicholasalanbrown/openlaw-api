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
const proposals_entity_1 = require("./proposals.entity");
const slugify_1 = require("slugify");
const gitlab = require("../gitlab");
let ProposalsService = class ProposalsService {
    constructor(proposalsRepository) {
        this.proposalsRepository = proposalsRepository;
    }
    findAll(page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const proposals = yield this.proposalsRepository.find();
            return proposals;
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const postgresRecord = yield this.proposalsRepository.findOne({
                where: { id },
            });
            const gitlabRecord = yield gitlab.getProject(1);
            console.log(gitlabRecord);
            return postgresRecord;
        });
    }
    findOneBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.proposalsRepository.findOne({
                where: { slug },
            });
        });
    }
    createProposal(title) {
        return __awaiter(this, void 0, void 0, function* () {
            let proposal = yield this.proposalsRepository.findOne({
                where: [{ title }],
            });
            if (proposal) {
                throw new common_1.HttpException('Proposal already exists', common_1.HttpStatus.BAD_REQUEST);
            }
            const gitlabProject = yield gitlab.createProject(title);
            yield gitlab.seedRepo(gitlabProject.id, title);
            proposal = yield this.proposalsRepository.create({
                title,
                slug: slugify_1.default(title, { lower: true }),
                gitlabProjectId: gitlabProject.id
            });
            yield this.proposalsRepository.save(proposal);
            return proposal;
        });
    }
    updateProposal(id, title) {
        return __awaiter(this, void 0, void 0, function* () {
            let proposal = yield this.proposalsRepository.findOne({
                where: { id },
            });
            if (!proposal) {
                throw new common_1.HttpException('Proposal not found', common_1.HttpStatus.NOT_FOUND);
            }
            yield this.proposalsRepository.update({ id }, {
                title,
                slug: slugify_1.default(title, { lower: true }),
            });
            proposal = yield this.proposalsRepository.findOne({
                where: { id },
            });
            return proposal;
        });
    }
    deleteProposal(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const proposal = yield this.proposalsRepository.findOne({
                where: { id },
            });
            if (!proposal) {
                throw new common_1.HttpException('Proposal not found', common_1.HttpStatus.NOT_FOUND);
            }
            yield this.proposalsRepository.remove(proposal);
            return !proposal.id;
        });
    }
    createBranch(id, newBranchName, sourceBranchName) {
        return __awaiter(this, void 0, void 0, function* () {
            const proposal = yield this.proposalsRepository.findOne({
                where: [{ id }],
            });
            if (!proposal) {
                throw new common_1.HttpException('Proposal not found', common_1.HttpStatus.NOT_FOUND);
            }
            const newBranch = yield gitlab.createBranch(proposal.gitlabProjectId, newBranchName, sourceBranchName);
            return proposal;
        });
    }
    commitToBranch(propoosalId, branchName, message, title, description, summary, legal) {
        return __awaiter(this, void 0, void 0, function* () {
            const proposal = yield this.proposalsRepository.findOne({
                where: [{ id: propoosalId }],
            });
            if (!proposal) {
                throw new common_1.HttpException('Proposal not found', common_1.HttpStatus.NOT_FOUND);
            }
            const newCommit = yield gitlab.commitToBranch(proposal.gitlabProjectId, branchName, message, title, description, summary, legal);
            return proposal;
        });
    }
    deleteBranch(propoosalId, branchName) {
        return __awaiter(this, void 0, void 0, function* () {
            const proposal = yield this.proposalsRepository.findOne({
                where: [{ id: propoosalId }],
            });
            if (!proposal) {
                throw new common_1.HttpException('Proposal not found', common_1.HttpStatus.NOT_FOUND);
            }
            const newBranch = yield gitlab.deleteBranch(proposal.gitlabProjectId, branchName);
            return proposal;
        });
    }
};
ProposalsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(proposals_entity_1.ProposalsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProposalsService);
exports.ProposalsService = ProposalsService;
//# sourceMappingURL=proposals.service.js.map