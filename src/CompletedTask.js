import React from 'react';

class CompletedTask extends React.Component {
    render() {
        return (
            <div className="row gridContainerCompleted">
                <div className="col-8 gridItemCompleted">
                    {this.props.item.description}
                </div>
                
                <div className="col-4 gridItemCompleted">
                    {this.props.item.due}
                </div>
            </div>
        );
    }
}

export default CompletedTask;