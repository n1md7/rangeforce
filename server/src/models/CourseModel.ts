import UserSchemaModel from "../database/schemas/Users";
import {CourseRequestType, CourseSchemaType} from "../types/schemas/Courses";
import BaseModel from './BaseModel';

class UserModel extends BaseModel<CourseSchemaType, CourseRequestType>{

    constructor(model) {
        super(model);
    }

}

export default new UserModel(UserSchemaModel);
