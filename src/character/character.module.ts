import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { Character } from './entities/character.entity';
import { Location } from '../location/entities/location.entity';
import { Episode } from '../episode/entities/episode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Character, Location, Episode])],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
