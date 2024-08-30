import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEpisodeDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  airDate: string;
}
