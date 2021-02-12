import {Model} from 'mongoose';

export default abstract class BaseModel<ReturnType, RequestType> {
    protected model: typeof Model;

    protected constructor(model: typeof Model) {
        this.model = model;
    }

    public async getById(id: string): Promise<ReturnType> {
        return this.model.findById(id);
    }

    public async getAll(): Promise<ReturnType[]> {
        return this.model.find({});
    }

    public async save(user: RequestType): Promise<ReturnType> {
        return await new this.model(user).save();
    }

}
