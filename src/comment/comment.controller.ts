import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { EpisodeService } from 'src/episode/episode.service';
import { Comment as CommentEntity } from './entities/comment.entity';

@Controller('comments')
export class CommentController {
    constructor(
        private readonly commentService: CommentService,
        private readonly episodeService: EpisodeService,
    ) {}

    @Post('episode/:episodeId')
    async create(
        @Param('episodeId') episodeId: number,
        @Body() createCommentDto: CreateCommentDto,
    ): Promise<CommentEntity> {
        const episode = await this.episodeService.findOne(episodeId); 
        createCommentDto.episodeId = episode.id; 
        return this.commentService.create(createCommentDto);
    }

    @Get()
    findAll() {
        return this.commentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.commentService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateCommentDto: UpdateCommentDto,
    ) {
        return this.commentService.update(+id, updateCommentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.commentService.remove(+id);
    }
}
