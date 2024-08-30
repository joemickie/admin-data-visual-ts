import { Test, TestingModule } from '@nestjs/testing';
import { CharacterService } from '../../src/character/character.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Character } from '../../src/character/entities/character.entity';
import { Repository } from 'typeorm';

describe('CharacterService', () => {
  let service: CharacterService;
  let repository: Repository<Character>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CharacterService,
        {
          provide: getRepositoryToken(Character),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CharacterService>(CharacterService);
    repository = module.get<Repository<Character>>(getRepositoryToken(Character));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add more test cases here...
});
