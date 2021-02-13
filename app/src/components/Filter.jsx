import React from "react";

const Filter = ({dropDownHandler, state, setCategoryHandler, categories}) => {

    return (
        <div className="filter">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h1 className="text-muted">Courses</h1>
                </div>
                <div className="col-12 col-md-6 m-auto">
                    <div className="dropdown float-right">
                        <button
                            onClick={dropDownHandler}
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            aria-expanded="false"
                            aria-haspopup="true"
                            data-toggle="dropdown">
                            Filter categories
                        </button>
                        <div className={`dropdown-menu ${state ? '' : 'hide'}`}>
                            <a
                                onClick={setCategoryHandler(-1)}
                                className="dropdown-item">
                                Show all
                            </a>
                            {
                                categories.map((category, index) => {
                                    return (
                                        <a key={index}
                                           onClick={setCategoryHandler(index)}
                                           className="dropdown-item">
                                            {category.name}
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
