import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    ManyToMany,
    JoinTable,
    CreateDateColumn,
  } from 'typeorm';
  import { Location } from '../../location/entities/location.entity';
  import { Episode } from '../../episode/entities/episode.entity';
  
  @Entity()
  export class Character {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column()
    status: string;
  
    @Column()
    stateOfOrigin: string;
  
    @Column()
    gender: string;
  
    @ManyToOne(() => Location, (location) => location.characters)
    location: Location;
  
    @ManyToMany(() => Episode, (episode) => episode.characters)
    @JoinTable()
    episodes: Episode[];
  
    @CreateDateColumn()
    createdAt: Date;
  }
  