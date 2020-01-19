import React from 'react';

class OutstandingTask extends React.Component {
    
    deleteClicked = () => {
        this.props.deleteTaskFunc(this.props.item.id)
    }

    doneClicked = () => {
        alert('You clicked done');
    }
    
    render() {
        return (
            <div className="row gridContainerOutstanding">
                <div className="col-12 col-md-8 gridItemOutstanding">
                    {this.props.item.description}
                </div>

                <div className="col-6 col-md-2 gridItemOutstanding">
                {this.props.item.due}
                </div>

                <div className="col-6 col-md-2 gridItemOutstanding">
                    <button type="button" onClick={this.doneClicked}>&#10004;</button>
                    <button type="button" onClick={this.deleteClicked}><b>&#128465;</b></button>
                </div>
            </div>
        );
    }
}

export default OutstandingTask;