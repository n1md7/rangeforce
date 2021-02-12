import ModuleSchemaModel from "../database/schemas/Modules";
import {ModuleRequestType, ModuleSchemaType} from "../types/schemas/Modules";
import BaseModel from './BaseModel';

class ModuleModel extends BaseModel<ModuleSchemaType, ModuleRequestType> {

    constructor(model) {
        super(model);
    }

}

export default new ModuleModel(ModuleSchemaModel);
