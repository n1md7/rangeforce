export enum ModuleStatus {
    active = "active",
    hidden = "hidden",
}

export enum DifficultyType {
    peaceOfCake = "piece of cake",
    veryEasy = "very easy",
    easy = "easy",
    medium = "medium",
    hard = "hard",
    tooHard = "too hard",
    extremelyHard = "extremely hard"

}

export type ModuleRequestType = {
    name: string;
    description: string;
}

export type ModuleSchemaType = {
    _id: string;
    type: string;
    difficulty: DifficultyType;
    tags: [];
    status: ModuleStatus;
    createdAt: Date;
    updatedAt: Date;
    usage: [];
} & ModuleRequestType;
