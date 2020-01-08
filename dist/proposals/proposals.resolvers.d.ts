import { ProposalsService } from './proposals.service';
import { ProposalsDto } from './dto/proposals.dto';
export declare class ProposalsResolvers {
    private readonly proposalsService;
    constructor(proposalsService: ProposalsService);
    getProposals(): Promise<ProposalsDto[]>;
    findOneById(id: string): Promise<ProposalsDto>;
    findOneBySlug(slug: string): Promise<ProposalsDto>;
    createProposal(title: string): Promise<ProposalsDto>;
    createBranch(id: string, newBranchName: string, sourceBranchName: string): Promise<ProposalsDto>;
    commitToBranch(proposalId: string, branchName: string, message: string, title: string, description: string, summary: string, legal: string): Promise<ProposalsDto>;
    deleteBranch(proposalId: string, branchName: string): Promise<ProposalsDto>;
    updateProposal(id: string, title: string): Promise<ProposalsDto>;
    deleteProposal(id: string): Promise<boolean>;
}
