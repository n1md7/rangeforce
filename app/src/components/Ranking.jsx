import React, {useState} from "react";
import {Rank} from "../types";

const Ranking = ({users, totalModules}) => {
    const [sortType, setSortType] = useState(Rank.topUsersByWeek);
    const showRankBy = type => () => setSortType(type);

    if (!totalModules) {
        return (
            <div>No data</div>
        );
    }

    return (
        <div className="top-users my-5 row no-gutters">
            <h1 className="text-muted mb-3">Top 5 users by </h1>
            <div className="col-auto d-flex flex-row my-auto ml-md-3">
                <button onClick={showRankBy(Rank.topUsersByWeek)} className="btn btn-outline-primary ml-md-2">Week</button>
                <button onClick={showRankBy(Rank.topUsersByMonth)} className="btn btn-outline-success ml-2">Month</button>
            </div>
            <div className="col-12">
                <table className="table table-dark table">
                    <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">Progress</th>
                        <th scope="col">Module Completion</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users[sortType].map((user, i) => {
                            const progress = (user.modules.length / totalModules) * 100;
                            const style = {width: `${progress}%`};
                            const progressText = `${user.modules.length} our of ${totalModules}`;

                            return (
                                <tr key={i}>
                                    <th scope="row">{1 + i}</th>
                                    <td>{user.username}</td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar" style={style}>{/**/}</div>
                                        </div>
                                    </td>
                                    <td>{progressText}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Ranking;