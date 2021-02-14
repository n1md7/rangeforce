export default abstract class BaseModel<StoreType> {

    protected store: StoreType[];

    protected constructor(store: StoreType[]) {
        this.store = store;
    }

    public async getAll(): Promise<StoreType[]> {
        return this.store;
    }

    public async save(): Promise<boolean> {
        return true;
    }

}
