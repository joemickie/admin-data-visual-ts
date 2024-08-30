import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    OneToMany,
    CreateDateColumn,
  } from 'typeorm';
  import { Character } from '../../character/entities/character.entity';
  import { Comment } from '../../comment/entities/comment.entity';
  
  @Entity()
  export class Episode {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @Column({ name: 'releaseDate', type: 'date', nullable: true })
    releaseDate?: string;
  
    @ManyToMany(() => Character, (character) => character.episodes)
    characters: Character[];
  
    @OneToMany(() => Comment, (comment) => comment.episode)
    comments: Comment[];
  
    @CreateDateColumn()
    createdAt: Date;
  }
  