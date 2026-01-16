import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
export declare class Profile extends Document {
    avatar: string;
    bio: string;
    user: User;
}
export declare const ProfileSchema: mongoose.Schema<Profile, mongoose.Model<Profile, any, any, any, mongoose.Document<unknown, any, Profile, any, mongoose.DefaultSchemaOptions> & Profile & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, Profile>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Profile, mongoose.Document<unknown, {}, Profile, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Profile & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, Profile, mongoose.Document<unknown, {}, Profile, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Profile & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    avatar?: mongoose.SchemaDefinitionProperty<string, Profile, mongoose.Document<unknown, {}, Profile, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Profile & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    bio?: mongoose.SchemaDefinitionProperty<string, Profile, mongoose.Document<unknown, {}, Profile, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Profile & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    user?: mongoose.SchemaDefinitionProperty<User, Profile, mongoose.Document<unknown, {}, Profile, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<Profile & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, Profile>;
