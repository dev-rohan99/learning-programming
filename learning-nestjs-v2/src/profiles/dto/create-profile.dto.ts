import { IsString, Length } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  avatar: string;
  @IsString()
  @Length(20, 100)
  bio: string;
}
