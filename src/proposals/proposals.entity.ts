import {
  Entity,
  Column,
} from 'typeorm';
import { Base } from '../common/entities/base.entity';

@Entity('proposal')
export class ProposalsEntity extends Base {
  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  slug: string;

  @Column({ type: 'int' })
  gitlabProjectId: number;

}
