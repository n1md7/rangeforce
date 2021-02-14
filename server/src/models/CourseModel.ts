import BaseModel from './BaseModel';
import {categories, Category} from '../store/Courses';

class CourseModel extends BaseModel<Category> {

    constructor(store) {
        super(store);
    }

}

export default new CourseModel(categories);
