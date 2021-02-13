import ModuleSchemaModel from "../database/schemas/Modules";
import {ModuleRequestType, ModuleSchemaType} from "../types/schemas/Modules";
import BaseModel from './BaseModel';
import {activityDateFormat, monthStartDate} from '../helpers/dateUtils';

type Modules = {
    _id: string,
    name: string,
    difficulty: string,
    description: string,
    activity: {
        [x: string]: number
    }
};

const modules: Modules[] = [
    {
        _id: "195f20b1-0ef2-453b-883b-a88902e12fb5",
        name: 'Introduction to Injection Attacks',
        difficulty: 'medium',
        description: 'Strange sonic showers lead to the vision.',
        activity: {
            '01/12/2020': 123,
            '01/01/2021': 23,
            '01/02/2021': 12
        }
    }, {
        _id: "bdc71ef9-5cfb-40ef-a03d-abc069a2ad00",
        name: 'SQL Injection: Overview ',
        difficulty: 'easy',
        description: 'Always convert a green people.',
        activity: {
            '01/12/2020': 54,
            '01/01/2021': 34,
            '01/02/2021': 567
        }
    }, {
        _id: "aae13b59-b91c-4480-ac44-9dec4c381b7f",
        name: 'Broken Access Control Overview',
        difficulty: 'hard',
        description: 'Die, scotty, stigma!',
        activity: {
            '01/12/2020': 1,
            '01/01/2021': 2,
            '01/02/2021': 98
        }
    }, {
        _id: "ffdb241c-da0f-4d8f-95ef-f7a3891a91c0",
        name: 'XSS Overview',
        difficulty: 'easy',
        description: 'The transporter goes friendship like an intelligent queen.',
        activity: {
            '01/12/2020': 1,
            '01/01/2021': 2,
            '01/02/2021': 14
        }
    },{
        _id: "45c97585-863d-4586-83cc-e8f94623aa5d",
        name: 'Stored-XSS Overview',
        difficulty: 'hard',
        description: "Sub-light, lunar green people technically avoid a biological, bare moon.",
        activity: {
            '01/12/2020': 5,
            '01/01/2021': 20,
            '01/02/2021': 14
        }
    }
];

class ModuleModel extends BaseModel<ModuleSchemaType, ModuleRequestType> {

    constructor(model) {
        super(model);
    }

    public async getTopModulesOfTheMonth(top): Promise<{
        modules: Modules[],
        total: number
    }> {
        const currentMontStartDate = monthStartDate();
        const formattedDate = activityDateFormat(currentMontStartDate);
        const topModules = [...modules].sort((first, second) => {
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

export default new ModuleModel(ModuleSchemaModel);
