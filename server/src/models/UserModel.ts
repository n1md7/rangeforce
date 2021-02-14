import BaseModel from './BaseModel';
import {monthDateRanges, weekDateRanges} from '../helpers/dateUtils';
import users, {User, ModuleStatus} from '../store/Users';
import {deepCopy} from '../helpers';

class UserModel extends BaseModel<User> {

    constructor(store) {
        super(store);
    }

    public async getUserRankingByWeek(top: number): Promise<User[]> {
        // This will get start date of the week
        // And it is used to get object key directly from store
        // rather then making extra comparisons
        const [formattedWeek] = weekDateRanges();
        const userListByCurrentWeek: User[] = deepCopy<User[]>(users)
            .map(user => {
                user.modules = user.modules
                    .filter(module => {
                        const active = module.status === ModuleStatus.done;
                        const endWeekDate = module.endWeekDate === formattedWeek;

                        return active && endWeekDate;
                    });

                return user;
            }).sort((first, second) => {
                if (first.modules.length < second.modules.length) return 1;
                if (first.modules.length > second.modules.length) return -1;
                return 0;
            });

        return userListByCurrentWeek.splice(0, top);
    }

    public async getUserRankingByMonth(top: number): Promise<User[]> {
        const [formattedMonth] = monthDateRanges();
        const userListByCurrentMonth: User[] = deepCopy<User[]>(users)
            .map(user => {
                user.modules = user.modules
                    .filter(module => {
                        const active = module.status === ModuleStatus.done;
                        const endMonthDate = module.endMonthDate === formattedMonth;

                        return active && endMonthDate;
                    });

                return user;
            }).sort((first, second) => {
                if (first.modules.length < second.modules.length) return 1;
                if (first.modules.length > second.modules.length) return -1;
                return 0;
            });

        return userListByCurrentMonth.splice(0, top);
    }

}

export default new UserModel(users);
