export enum ModuleStatus {
    active = 'active',
    done = 'done'
}

export type User = {
    username: string,
    modules: Array<{
        id: string;
        status: ModuleStatus;
        endDate: string;
        endWeekDate: string;
        endMonthDate: string
    }>,
}

const users: User[] = [
    {
        username: 'admin',
        modules: [
            {
                id: "195f20b1-0ef2-453b-883b-a88902e12fb5",
                status: ModuleStatus.active,
                endDate: '13/02/2021',
                endWeekDate: '08/02/2021',
                endMonthDate: '01/02/2021',
            }, {
                id: "bdc71ef9-5cfb-40ef-a03d-abc069a2ad00",
                status: ModuleStatus.done,
                endDate: '12/02/2021',
                endWeekDate: '01/02/2021',
                endMonthDate: '01/02/2021',
            }, {
                id: "aae13b59-b91c-4480-ac44-9dec4c381b7f",
                status: ModuleStatus.done,
                endDate: '12/02/2021',
                endWeekDate: '08/02/2021',
                endMonthDate: '01/02/2021',
            }
        ]
    }, {
        username: 'nimda',
        modules: [
            {
                id: "195f20b1-0ef2-453b-883b-a88902e12fb5",
                status: ModuleStatus.done,
                endDate: '13/02/2021',
                endWeekDate: '08/02/2021',
                endMonthDate: '01/01/2021',
            }, {
                id: "bdc71ef9-5cfb-40ef-a03d-abc069a2ad00",
                status: ModuleStatus.done,
                endDate: '12/02/2021',
                endWeekDate: '08/02/2021',
                endMonthDate: '01/02/2021',
            }, {
                id: "aae13b59-b91c-4480-ac44-9dec4c381b7f",
                status: ModuleStatus.done,
                endDate: '13/02/2021',
                endWeekDate: '08/02/2021',
                endMonthDate: '01/01/2021',
            }, {
                id: "ffdb241c-da0f-4d8f-95ef-f7a3891a91c0",
                status: ModuleStatus.done,
                endDate: '13/02/2021',
                endWeekDate: '08/02/2021',
                endMonthDate: '01/02/2021',
            },
        ]
    }, {
        username: 'jack',
        modules: [
            {
                id: "aae13b59-b91c-4480-ac44-9dec4c381b7f",
                status: ModuleStatus.done,
                endDate: '13/02/2021',
                endWeekDate: '08/02/2021',
                endMonthDate: '01/02/2021',
            }, {
                id: "ffdb241c-da0f-4d8f-95ef-f7a3891a91c0",
                status: ModuleStatus.done,
                endDate: '13/02/2021',
                endWeekDate: '08/02/2021',
                endMonthDate: '01/02/2021',
            },{
                id: "ffdb241c-da0f-4d8f-95ef-f7a3891a91c0",
                status: ModuleStatus.done,
                endDate: '13/02/2021',
                endWeekDate: '08/02/2021',
                endMonthDate: '01/02/2021',
            }
        ]
    }, {
        username: 'george',
        modules: [
            {
                id: "aae13b59-b91c-4480-ac44-9dec4c381b7f",
                status: ModuleStatus.done,
                endDate: '13/02/2021',
                endWeekDate: '08/02/2021',
                endMonthDate: '01/02/2021',
            }, {
                id: "ffdb241c-da0f-4d8f-95ef-f7a3891a91c0",
                status: ModuleStatus.done,
                endDate: '13/02/2021',
                endWeekDate: '08/02/2021',
                endMonthDate: '01/02/2021',
            },
        ]
    }
];

export default users;
