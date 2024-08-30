import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';
import { CreateCharacterDto } from './dto/create-character.dto';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private readonly characterRepository: Repository<Character>,
  ) {}

  async findAll(sortField: string, sortOrder: 'ASC' | 'DESC', filter: any): Promise<Character[]> {
    const query = this.characterRepository.createQueryBuilder('character');

    if (filter.gender) {
      query.andWhere('character.gender = :gender', { gender: filter.gender });
    }

    if (filter.status) {
      query.andWhere('character.status = :status', { status: filter.status });
    }

    if (filter.location) {
      query.andWhere('character.location = :location', { location: filter.location });
    }

    if (sortField) {
      query.orderBy(`character.${sortField}`, sortOrder);
    }

    return query.getMany();
  }

  async findOne(id: number): Promise<Character> {
    return this.characterRepository.findOne({ where: { id }, relations: ['location', 'episodes'] });
  }

  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const character = this.characterRepository.create(createCharacterDto);
    return this.characterRepository.save(character);
  }

  async update(id: number, updateCharacterDto: CreateCharacterDto): Promise<Character> {
    await this.characterRepository.update(id, updateCharacterDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.characterRepository.delete(id);
  }
}
