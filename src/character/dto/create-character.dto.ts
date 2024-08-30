import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum Status {
  ACTIVE = 'ACTIVE',
  DEAD = 'DEAD',
  UNKNOWN = 'UNKNOWN',
}

export class CreateCharacterDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @IsNotEmpty()
  @IsString()
  stateOfOrigin: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  locationId: number;
}
