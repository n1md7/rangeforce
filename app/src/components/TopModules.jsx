import React from "react";

const TopModules = ({modules}) => {
    if (!modules.length) {
        return (
            <div>No data</div>
        );
    }

    return (
        <div className="top-modules my-5 row no-gutters">
            <h1 className="text-muted">Top 10 modules of the month</h1>
            <div className="col-12 d-flex flex-column">

                {
                    modules.map((module, i) => {
                        return (
                            <div key={i} className="card">
                                <div className="card-body d-flex flex-column flex-md-row">
                                    <div>{module.name}</div>
                                    <div className="text-md-center">
                                        {module.difficulty}
                                    </div>
                                    <div className=" text-md-right">{module.description}</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default TopModules;