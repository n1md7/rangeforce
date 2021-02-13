import mongoose, {Document} from "mongoose";
import {CourseSchemaType, CourseStatus} from "../../types/schemas/Courses";

const Schema = mongoose.Schema;
const Courses = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 512,
        unique: true,
    },
    modules: {
        type: Array,
        default: []
    },
    category: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        default: CourseStatus.active
    }
});

export default mongoose.model<CourseSchemaType & Document>('courses', Courses);
