import React from 'react';
import moment from 'moment';

class CompletedTask extends React.Component {
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
                <div className="col-8 gridItemCompleted">
                    {this.props.item.description}
                </div>
                
                <div className="col-4 gridItemCompleted">
                    {dueDate}
                </div>
            </div>
        );
    }
}

export default CompletedTask;