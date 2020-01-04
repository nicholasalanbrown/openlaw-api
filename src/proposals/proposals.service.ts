import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProposalsEntity } from './proposals.entity';
import slugify from 'slugify';

import * as gitlab from '../gitlab';

@Injectable()
export class ProposalsService {
  constructor(
    @InjectRepository(ProposalsEntity)
    private proposalsRepository: Repository<ProposalsEntity>,
  ) {}

  async findAll(page: number = 1) {
    const proposals = await this.proposalsRepository.find();
    return proposals;
  }

  async findOneById(id: string) {
    return await this.proposalsRepository.findOne({
      where: { id },
    });
  }

  async findOneBySlug(slug: string) {
    return await this.proposalsRepository.findOne({
      where: { slug },
    });
  }

  async createProposal(title: string) {
    let proposal = await this.proposalsRepository.findOne({
      where: [{ title }],
    });

    if (proposal) {
      throw new HttpException('Proposal already exists', HttpStatus.BAD_REQUEST);
    }

    const gitlabProject = await gitlab.createProject(title);
    await gitlab.seedProject(gitlabProject.id, title);

    proposal = await this.proposalsRepository.create({
      title,
      slug: slugify(title, { lower: true }),
      gitlabProjectId: gitlabProject.id
    });

    await this.proposalsRepository.save(proposal);

    return proposal;
  }

  async updateProposal(id: string, title: string) {
    let proposal = await this.proposalsRepository.findOne({
      where: { id },
    });

    if (!proposal) {
      throw new HttpException('Proposal not found', HttpStatus.NOT_FOUND);
    }

    await this.proposalsRepository.update({ id }, { 
      title,
      slug: slugify(title, { lower: true }),
    });

    proposal = await this.proposalsRepository.findOne({
      where: { id },
    });

    return proposal;
  }

  async deleteProposal(id: string) {
    const proposal = await this.proposalsRepository.findOne({
      where: { id },
    });

    if (!proposal) {
      throw new HttpException('Proposal not found', HttpStatus.NOT_FOUND);
    }

    await this.proposalsRepository.remove(proposal);

    return !proposal.id;
  }
}
