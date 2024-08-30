import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    CreateDateColumn,
  } from 'typeorm';
  import { Character } from '../../character/entities/character.entity';
  
  @Entity()
  export class Location {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    state: string;
  
    @Column()
    country: string;
  
    @OneToMany(() => Character, (character) => character.location)
    characters: Character[];
  
    @CreateDateColumn()
    createdAt: Date;
  }
  