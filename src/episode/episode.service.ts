import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Episode } from './entities/episode.entity';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectRepository(Episode)
    private readonly episodeRepository: Repository<Episode>,
  ) {}

  async findAll(): Promise<Episode[]> {
    return this.episodeRepository
      .createQueryBuilder('episode')
      .leftJoinAndSelect('episode.comments', 'comment')
      .loadRelationCountAndMap('episode.commentCount', 'episode.comments')
      .orderBy('episode.releaseDate', 'ASC')
      .getMany();
  }

  async findOne(id: number): Promise<Episode> {
    return this.episodeRepository.findOne({ where: { id }, relations: ['characters', 'comments'] });
  }

  async create(createEpisodeDto: CreateEpisodeDto): Promise<Episode> {
    const episode = this.episodeRepository.create(createEpisodeDto);
    return this.episodeRepository.save(episode);
  }

  async update(id: number, updateEpisodeDto: CreateEpisodeDto): Promise<Episode> {
    await this.episodeRepository.update(id, updateEpisodeDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.episodeRepository.delete(id);
  }
  async findEpisodesByCharacter(characterId: number): Promise<Episode[]> {
    return this.episodeRepository
      .createQueryBuilder('episode')
      .innerJoin('episode.characters', 'character', 'character.id = :characterId', { characterId })
      .getMany();
  }
  
}
