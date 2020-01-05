import React from 'react';

class OutstandingTask extends React.Component {
    render() {
        return (
            <div className="row gridContainerOutstanding">
                <div className="col-12 col-md-8 gridItemOutstanding">
                    Buy milk
                </div>

                <div className="col-6 col-md-2 gridItemOutstanding">
                    01/12/19
                </div>

                <div className="col-6 col-md-2 gridItemOutstanding">
                    <button type="button">&#10004;</button>
                    <button type="button"><b>&#128465;</b></button>
                </div>
            </div>
        );
    }
}

export default OutstandingTask;