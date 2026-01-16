"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const profile_schema_1 = require("./schemas/profile.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ProfilesService = class ProfilesService {
    constructor(profileModel) {
        this.profileModel = profileModel;
    }
    async findAllProfile() {
        const findProfiles = await this.profileModel.find();
        if (!findProfiles) {
            throw new common_1.NotFoundException(`User profiles not found.`);
        }
        return findProfiles;
    }
    async findOneProfile(id) {
        const findSingleProfile = await this.profileModel.findById(id);
        if (!findSingleProfile) {
            throw new common_1.NotFoundException(`User profile ID ${id} not found.`);
        }
        return findSingleProfile;
    }
    async createNewProfile(createProfileDto) {
        const createProfile = {
            ...createProfileDto,
        };
        await this.profileModel.create(createProfile);
        return createProfile;
    }
    async updateUserProfile(id, updateProfileDto) {
        const updateProfile = await this.profileModel.findByIdAndUpdate(id, {
            bio: updateProfileDto.bio,
            avatar: updateProfileDto.avatar,
        }, { new: true });
        if (!updateProfile) {
            throw new common_1.HttpException('User profile not found!', common_1.HttpStatus.NOT_FOUND);
        }
        return updateProfile;
    }
    async deleteUserProfile(id) {
        const deleteProfile = await this.profileModel.findByIdAndDelete(id);
        if (!deleteProfile) {
            throw new common_1.NotFoundException(`User profile ID ${id} not found.`);
        }
        return {
            message: 'User profile deleted successfully!',
            profile: deleteProfile,
        };
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(profile_schema_1.Profile.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map