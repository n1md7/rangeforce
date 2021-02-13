export type ModuleType = {
    _id: string,
    name: string,
    difficulty: string,
    description: string,
    activity: {
        [x: string]: number
    }
};

export type CourseType = {
    name: string,
    modules: string[],
    tags: string[]
}

export type CategoryType = {
    name: string,
    courses: CourseType[]
}

export type UserType = {
    username: string,
    modulesFinished: string[],
    modulesInProgress: string[]
}

export enum Rank {
    topUsersByWeek = 'topUsersByWeek',
    topUsersByMonth = 'topUsersByMonth'
}
