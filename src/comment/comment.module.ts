import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { Comment } from './entities/comment.entity';
import { EpisodeModule } from '../episode/episode.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]),
    EpisodeModule,
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
