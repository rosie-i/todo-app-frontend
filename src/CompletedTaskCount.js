import React from 'react';

class CompletedTaskCount extends React.Component {
    render() {
        return (
            <div className="row">
                <p className="tasksToGo col-12"><b>1</b> completed!</p>
            </div>
        );
    }
}

export default CompletedTaskCount;