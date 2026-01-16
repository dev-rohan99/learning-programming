import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './schemas/profile.schema';
import { Model } from 'mongoose';
export declare class ProfilesService {
    private readonly profileModel;
    constructor(profileModel: Model<Profile>);
    findAllProfile(): Promise<(import("mongoose").Document<unknown, {}, Profile, {}, import("mongoose").DefaultSchemaOptions> & Profile & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findOneProfile(id: string): Promise<import("mongoose").Document<unknown, {}, Profile, {}, import("mongoose").DefaultSchemaOptions> & Profile & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    createNewProfile(createProfileDto: CreateProfileDto): Promise<{
        avatar: string;
        bio: string;
    }>;
    updateUserProfile(id: string, updateProfileDto: UpdateProfileDto): Promise<import("mongoose").Document<unknown, {}, Profile, {}, import("mongoose").DefaultSchemaOptions> & Profile & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    deleteUserProfile(id: string): Promise<{
        message: string;
        profile: import("mongoose").Document<unknown, {}, Profile, {}, import("mongoose").DefaultSchemaOptions> & Profile & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
}
