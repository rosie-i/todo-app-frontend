import React from 'react';

class OutstandingTask extends React.Component {

    deleteClicked = () => {
        this.props.deleteTaskFunc(this.props.item.id)
    }

    doneClicked = () => {
        this.props.doneClickedFunc(this.props.item.id)
    }

    render() {


        // Conditional rendering using variables to store elements
        // If our task is marked completed: true, this will render with strikethrough text

        // let description;

        // if (this.props.item.completed) {
        //     description = <div className="col-12 col-md-8 gridItemOutstanding completedTaskRendering">{this.props.item.description}</div>
        // } else {
        //     description = <div className="col-12 col-md-8 gridItemOutstanding">{this.props.item.description}</div>
        // }


        return (
            <div className="row gridContainerOutstanding">
                <div className="col-12 col-md-8 gridItemOutstanding">{this.props.item.description}</div>

                <div className="col-6 col-md-2 gridItemOutstanding">
                    {this.props.item.due}
                </div>

                <div className="col-6 col-md-2 gridItemOutstanding">
                    {this.props.item.completed === false && (
                    <button type="button" onClick={this.doneClicked}>&#10004;</button>
                    )}
                    <button type="button" onClick={this.deleteClicked}><b>&#128465;</b></button>
                </div>
            </div>
        );
    }
}

export default OutstandingTask;