import React from 'react';
import moment from 'moment';

class CompletedTask extends React.Component {

    deleteClicked = () => {
        this.props.deleteTaskFunc(this.props.item.taskID)
    }

    render() {
        var inputDate = this.props.item.due;
        var outputDate = moment(inputDate).format("DD MMM YYYY");
        console.log(outputDate);

        // Conditional rendering using variables to store elements	
        // If our outputDate is 'invalid date', this will render as 'Whenever...'	

        let dueDate;	

        if (outputDate == 'Invalid date') {
            dueDate = 'Whenever...'	
        } else {	
            dueDate = outputDate	
        }

        return (
            <div className="row gridContainerCompleted">
                <div className="col-12 col-md-8 gridItemCompleted">
                    {this.props.item.description}
                </div>
                
                <div className="col-6 col-md-2 gridItemCompleted">
                    {dueDate}
                </div>

                <div className="col-6 col-md-2 gridItemOutstanding">
                    <button type="button" className="button" onClick={this.doneClicked}>&#x21B6;</button>
                    <button type="button" className="button" onClick={this.deleteClicked}><b>&#128465;</b></button>
                </div>

            </div>
        );
    }
}

export default CompletedTask;