import {badge} from '../constants';
import React from "react";

const Category = ({category}) => (
    <div className="courses">
        <div className="row mt-5 no-gutters">
            <h3>{category.name} ({category.courses.length} course)</h3>
            <div className="col-12 d-flex flex-column category">
                {
                    category.courses.map((course, i) => {
                        return (
                            <div key={i} className="card">
                                <div className="card-body d-flex flex-column flex-md-row">
                                    <div className="">{course.name}</div>
                                    <div className=" text-md-center">
                                        {course.modules.length} module{course.modules.length > 1 && 's'}
                                    </div>
                                    <div>
                                        {
                                            course.tags.map((tag, j) => {

                                                if (j > 1) {
                                                    return <span key={j}>+{course.tags.length - 2}</span>
                                                }

                                                return (
                                                    <span key={j}
                                                          className={`badge badge-${badge[tag] || 'danger'} mr-1`}>
                                                        {tag}
                                                    </span>
                                                );
                                            })
                                        }
                                    </div>
                                    <div className=" text-md-right">View modules</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </div>
);

export default Category;