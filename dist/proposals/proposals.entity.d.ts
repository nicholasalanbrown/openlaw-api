import { Base } from '../common/entities/base.entity';
export declare class ProposalsEntity extends Base {
    title: string;
    slug: string;
    gitlabProjectId: number;
    description: string;
    summary: string;
    legal: string;
}
