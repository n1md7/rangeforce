export enum UserStatus {
    active = "active",
    blocked = "blocked",
}

export type UserRequestType = {
    username: string;
    password: string;
}

export type UserSchemaType = {
    _id: string;
    coursesFinished: [];
    coursesInProgress: [];
    status: UserStatus;
} & UserRequestType;
