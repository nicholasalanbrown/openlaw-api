import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProposalsResolvers } from './proposals.resolvers';
import { ProposalsService } from './proposals.service';
import { ProposalsEntity } from './proposals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProposalsEntity])],
  providers: [ProposalsService, ProposalsResolvers],
})
export class ProposalsModule {}
