import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
import { ProfilesGuard } from './profiles.guard';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}
  @Get()
  findAll(@Query('age', ParseIntPipe) age: number) {
    return [{ age }];
  }

  @Get('all')
  findAllProfile() {
    return this.profilesService.findAllProfile();
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: UUID) {
    return {
      message: 'User found!',
      profile: this.profilesService.findOneProfile(id),
    };
  }

  @Post()
  createProfile(
    @Body(new ValidationPipe()) createProfileDto: CreateProfileDto,
  ) {
    return {
      message: 'User profile created!',
      profile: this.profilesService.createNewProfile({
        bio: createProfileDto.bio,
        avatar: createProfileDto.avatar,
      }),
    };
  }

  @Put(':id')
  updateProfile(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return {
      message: 'User profile updated!',
      profile: this.profilesService.updateUserProfile(id, {
        ...updateProfileDto,
      }),
    };
  }

  @Delete(':id')
  @UseGuards(ProfilesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteUserProfile(@Param('id', ParseUUIDPipe) id: UUID) {
    return {
      message: 'User profile successfully deleted!',
      profile: this.profilesService.deleteUserProfile(id),
    };
  }
}
