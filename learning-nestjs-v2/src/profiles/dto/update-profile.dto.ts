import { IsString, Length } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  avatar: string;
  @IsString()
  @Length(20, 100)
  bio: string;
}
