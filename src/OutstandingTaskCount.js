import React from 'react';

class OutstandingTaskCount extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <p className="tasksToGo"><b>{this.props.outstandingTaskCount}</b> to go!</p>
                </div>
            </div>
        );
    }
}

export default OutstandingTaskCount;
