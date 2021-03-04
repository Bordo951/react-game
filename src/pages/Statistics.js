import React from 'react';

class Statistics extends React.Component {
    renderStatistics() {
        let statistics = JSON.parse(window.localStorage.getItem('statistics')) ?? [];

        return statistics.map((statistic, rowIndex) => {
            return <tr className="statistics__table-item">
                <td>{statistic.winner}</td>
                <td>{statistic.mode}</td>
                <td>{statistic.level}</td>
                <td>{statistic.firstMove}</td>
                <td>{statistic.crossAmount}</td>
                <td>{statistic.zeroAmount}</td>
                <td>{statistic.totalAmount}</td>
            </tr>
        });


    }

    render() {
        let statistics = this.renderStatistics();

        if(!statistics.length) {
            statistics = <tr className="statistics__table-item">
                <td colSpan={7}>You need to play at least once to see the statistics on the screen.</td>
            </tr>
        }

        return (
            <div className="statistics">
                <table className="statistics__table">
                    <caption className="statistics__table-title">Statistics</caption>
                    <thead>
                        <tr>
                            <th className="statistics__table-head">Winner</th>
                            <th className="statistics__table-head">Game mode</th>
                            <th className="statistics__table-head">Level</th>
                            <th className="statistics__table-head">First Move</th>
                            <th className="statistics__table-head">X total</th>
                            <th className="statistics__table-head">O total</th>
                            <th className="statistics__table-head">Total Steps</th>
                        </tr>
                    </thead>
                    <tbody>
                        {statistics}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Statistics;
