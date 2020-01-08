import { ParseIntPipe, Injectable, UseGuards } from '@nestjs/common';
import { GqlExecutionContext, Context } from '@nestjs/graphql'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { ProposalsService } from './proposals.service';
import { ProposalsDto } from './dto/proposals.dto';
import { GqlAuthGuard } from '../auth/auth.guard';
import { CurrentUser } from '../auth/currentuser';
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

  @UseGuards(GqlAuthGuard)
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

  @Mutation('createBranch')
  async createBranch(
    @Args('id') id: string,
    @Args('newBranchName') newBranchName: string,
    @Args('sourceBranchName') sourceBranchName: string,
    ): Promise<ProposalsDto> {
    return await this.proposalsService.createBranch(id, newBranchName, sourceBranchName);
  }

  @Mutation('commitToBranch')
  async commitToBranch(
    @Args('proposalId') proposalId: string,
    @Args('branchName') branchName: string,
    @Args('message') message: string,
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('summary') summary: string,
    @Args('legal') legal: string,
    ): Promise<ProposalsDto> {
    return await this.proposalsService.commitToBranch(
      proposalId,
      branchName,
      message,
      title,
      description,
      summary,
      legal,
    );
  }

  @Mutation('deleteBranch')
  async deleteBranch(
    @Args('proposalId') proposalId: string,
    @Args('branchName') branchName: string,
    ): Promise<ProposalsDto> {
    return await this.proposalsService.deleteBranch(proposalId, branchName );
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
