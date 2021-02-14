import BaseModel from './BaseModel';
import {monthDateRanges} from '../helpers/dateUtils';
import {deepCopy} from '../helpers';
import {Module, modules} from '../store/Modules';

class ModuleModel extends BaseModel<Module> {

    constructor(store) {
        super(store);
    }

    public async getTopModulesOfTheMonth(top): Promise<{
        modules: Module[],
        total: number
    }> {
        const [formattedDate] = monthDateRanges();
        const topModules = deepCopy<Module[]>(modules).sort((first, second) => {
            if (first.activity[formattedDate] < second.activity[formattedDate]) return 1;
            if (first.activity[formattedDate] > second.activity[formattedDate]) return -1;
            return 0;
        });

        return {
            modules: topModules.splice(0, top),
            total: modules.length
        };
    }

}

export default new ModuleModel(modules);
