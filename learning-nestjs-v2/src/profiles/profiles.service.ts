import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './schemas/profile.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile.name)
    private readonly profileModel: Model<Profile>,
  ) {}

  async findAllProfile() {
    const findProfiles = await this.profileModel.find();
    if (!findProfiles) {
      throw new NotFoundException(`User profiles not found.`);
    }
    return findProfiles;
  }

  async findOneProfile(id: string) {
    const findSingleProfile = await this.profileModel.findById(id);
    if (!findSingleProfile) {
      throw new NotFoundException(`User profile ID ${id} not found.`);
    }
    return findSingleProfile;
  }

  async createNewProfile(createProfileDto: CreateProfileDto) {
    const createProfile = {
      ...createProfileDto,
    };
    await this.profileModel.create(createProfile);
    return createProfile;
  }

  async updateUserProfile(id: string, updateProfileDto: UpdateProfileDto) {
    const updateProfile = await this.profileModel.findByIdAndUpdate(
      id,
      {
        bio: updateProfileDto.bio,
        avatar: updateProfileDto.avatar,
      },
      { new: true },
    );
    if (!updateProfile) {
      throw new HttpException('User profile not found!', HttpStatus.NOT_FOUND);
    }
    return updateProfile;
  }

  async deleteUserProfile(id: string) {
    const deleteProfile = await this.profileModel.findByIdAndDelete(id);
    if (!deleteProfile) {
      throw new NotFoundException(`User profile ID ${id} not found.`);
    }
    return {
      message: 'User profile deleted successfully!',
      profile: deleteProfile,
    };
  }
}
