import React from 'react';

class CompletedTask extends React.Component {
    render() {
        return (
            <div className="row gridContainerCompleted">
                <div className="col-8 gridItemCompleted">
                    Do laundry
                </div>
                <div className="col-4 gridItemCompleted">
                    30/11/19
                </div>
            </div>
        );
    }
}

export default CompletedTask;