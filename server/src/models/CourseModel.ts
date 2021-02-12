import CourseSchemaModel from "../database/schemas/Courses";
import {CourseRequestType, CourseSchemaType} from "../types/schemas/Courses";
import BaseModel from './BaseModel';

class CourseModel extends BaseModel<CourseSchemaType, CourseRequestType> {

    constructor(model) {
        // 😃
        super(model);
    }

}

export default new CourseModel(CourseSchemaModel);
