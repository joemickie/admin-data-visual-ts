import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
    ) { }

    async findAll(): Promise<Comment[]> {
        return this.commentRepository
            .createQueryBuilder('comment')
            .orderBy('comment.created_at', 'DESC')
            .getMany();
    }

    async findOne(id: number): Promise<Comment> {
        return this.commentRepository.findOne({ where: { id }, relations: ['episode'] });
    }

    async create(createCommentDto: CreateCommentDto): Promise<Comment> {
        const comment = this.commentRepository.create(createCommentDto);
        return this.commentRepository.save(comment);
    }

    async remove(id: number): Promise<void> {
        await this.commentRepository.delete(id);
    }
    async update(id: number, updateCommentDto: UpdateCommentDto): Promise<Comment> {
        const comment = await this.commentRepository.preload({
            id,
            ...updateCommentDto,
        });

        if (!comment) {
            throw new Error(`Comment with ID ${id} not found`);
        }

        return this.commentRepository.save(comment);
    }
}
