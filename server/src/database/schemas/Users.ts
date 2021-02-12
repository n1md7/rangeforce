import mongoose, {Document} from "mongoose";
import {UserSchemaType, UserStatus} from "../../types/schemas/Users";

const Schema = mongoose.Schema;
const Users = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 512
    },
    coursesFinished: {
        type: Array,
        default: []
    },
    coursesInProgress: {
        type: Array,
        default: []
    },
    status: {
        type: String,
        default: UserStatus.active
    }
});

export default mongoose.model<UserSchemaType & Document>('users', Users);
