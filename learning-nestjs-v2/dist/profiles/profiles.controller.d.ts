import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
export declare class ProfilesController {
    private profilesService;
    constructor(profilesService: ProfilesService);
    findAll(age: number): {
        age: number;
    }[];
    findAllProfile(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/profile.schema").Profile, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/profile.schema").Profile & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    findById(id: UUID): {
        message: string;
        profile: Promise<import("mongoose").Document<unknown, {}, import("./schemas/profile.schema").Profile, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/profile.schema").Profile & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }>;
    };
    createProfile(createProfileDto: CreateProfileDto): {
        message: string;
        profile: Promise<{
            avatar: string;
            bio: string;
        }>;
    };
    updateProfile(id: UUID, updateProfileDto: UpdateProfileDto): {
        message: string;
        profile: Promise<import("mongoose").Document<unknown, {}, import("./schemas/profile.schema").Profile, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/profile.schema").Profile & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }>;
    };
    deleteUserProfile(id: UUID): {
        message: string;
        profile: Promise<{
            message: string;
            profile: import("mongoose").Document<unknown, {}, import("./schemas/profile.schema").Profile, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/profile.schema").Profile & Required<{
                _id: import("mongoose").Types.ObjectId;
            }> & {
                __v: number;
            };
        }>;
    };
}
