import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { Character } from './entities/character.entity';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  async findAll(
    @Query('sortField') sortField: string,
    @Query('sortOrder') sortOrder: 'ASC' | 'DESC',
    @Query('gender') gender?: string,
    @Query('status') status?: string,
    @Query('location') location?: string,
  ): Promise<Character[]> {
    const filter = { gender, status, location };
    return this.characterService.findAll(sortField, sortOrder, filter);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Character> {
    return this.characterService.findOne(id);
  }

  @Post()
  async create(@Body() createCharacterDto: CreateCharacterDto): Promise<Character> {
    return this.characterService.create(createCharacterDto);
  }
}
