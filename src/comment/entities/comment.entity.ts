import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
  } from 'typeorm';
  import { Episode } from '../../episode/entities/episode.entity';
  
  @Entity()
  export class Comment {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    content: string;
  
    @Column()
    author: string;
  
    @ManyToOne(() => Episode, (episode) => episode.comments)
    episode: Episode;
  
    @CreateDateColumn()
    createdAt: Date;
  }
  