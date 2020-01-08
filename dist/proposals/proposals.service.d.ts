import { Repository } from 'typeorm';
import { ProposalsEntity } from './proposals.entity';
export declare class ProposalsService {
    private proposalsRepository;
    constructor(proposalsRepository: Repository<ProposalsEntity>);
    findAll(page?: number): Promise<ProposalsEntity[]>;
    findOneById(id: string): Promise<ProposalsEntity>;
    findOneBySlug(slug: string): Promise<ProposalsEntity>;
    createProposal(title: string): Promise<ProposalsEntity>;
    updateProposal(id: string, title: string): Promise<ProposalsEntity>;
    deleteProposal(id: string): Promise<boolean>;
    createBranch(id: string, newBranchName: string, sourceBranchName: string): Promise<ProposalsEntity>;
    commitToBranch(propoosalId: string, branchName: string, message: string, title: string, description: string, summary: string, legal: string): Promise<ProposalsEntity>;
    deleteBranch(propoosalId: string, branchName: string): Promise<ProposalsEntity>;
}
