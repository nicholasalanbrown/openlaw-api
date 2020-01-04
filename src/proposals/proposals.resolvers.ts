import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { ProposalsService } from './proposals.service';
import { ProposalsDto } from './dto/proposals.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
const pubSub = new PubSub();

@Resolver('Proposal')
// @UseGuards(new AuthGuard(), RolesGuard)
export class ProposalsResolvers {
  constructor(private readonly proposalsService: ProposalsService) {}

  @Query('proposals')
  async getProposals(): Promise<ProposalsDto[]> {
    return await this.proposalsService.findAll();
  }

  @Query('proposal')
  async findOneById(@Args('id') id: string): Promise<ProposalsDto> {
    return await this.proposalsService.findOneById(id);
  }

  @Query('proposalBySlug')
  async findOneBySlug(@Args('slug') slug: string): Promise<ProposalsDto> {
    return await this.proposalsService.findOneBySlug(slug);
  }

  @Mutation('createProposal')
  async createProposal(@Args('title') title: string): Promise<ProposalsDto> {
    return await this.proposalsService.createProposal(title);
  }

  @Mutation('updateProposal')
  async updateProposal(
    @Args('id') id: string,
    @Args('title') title: string,
  ): Promise<ProposalsDto> {
    return await this.proposalsService.updateProposal(id, title);
  }

  @Mutation('deleteRole')
  async deleteProposal(@Args('id') id: string): Promise<boolean> {
    return await this.proposalsService.deleteProposal(id);
  }
}
