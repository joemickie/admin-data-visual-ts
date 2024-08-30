import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { Episode } from './entities/episode.entity';

@Controller('episodes')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Get()
  async findAll(): Promise<Episode[]> {
    return this.episodeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Episode> {
    return this.episodeService.findOne(id);
  }

  @Post()
  async create(@Body() createEpisodeDto: CreateEpisodeDto): Promise<Episode> {
    return this.episodeService.create(createEpisodeDto);
  }
  @Get('character/:characterId')
async findEpisodesByCharacter(@Param('characterId') characterId: number): Promise<Episode[]> {
  return this.episodeService.findEpisodesByCharacter(characterId);
}

}
