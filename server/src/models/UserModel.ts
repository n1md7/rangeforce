import UserSchemaModel from "../database/schemas/Users";
import {UserRequestType, UserSchemaType} from "../types/schemas/Users";
import BaseModel from './BaseModel';

class UserModel extends BaseModel<UserSchemaType, UserRequestType>{

    constructor(model) {
        super(model);
    }

    public async getUserByUsername(username: string): Promise<UserSchemaType> {
        return this.model.findOne({username});
    }

}

export default new UserModel(UserSchemaModel);
