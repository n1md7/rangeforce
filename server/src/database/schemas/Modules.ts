import mongoose, {Document} from "mongoose";
import {ModuleSchemaType, ModuleStatus, DifficultyType} from "../../types/schemas/Modules";

const Schema = mongoose.Schema;
const Modules = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 512,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2048,
    },
    type: {
        type: String,
        default: ""
    },
    difficulty: {
        type: DifficultyType,
        default: DifficultyType.easy
    },
    tags: {
        type: Array,
        default: []
    },
    status: {
        type: ModuleStatus,
        default: ModuleStatus.active
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    usage: {
        type: Array,
        default: []
    }
});

export default mongoose.model<ModuleSchemaType & Document>('modules', Modules);
