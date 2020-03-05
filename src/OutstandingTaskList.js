import React from 'react';
import OutstandingTask from './OutstandingTask';

class OutstandingTaskList extends React.Component {
    render() {
        return (
            <div className="taskListBorder">
                <div className="row gridContainerOutstandingHeader">
                    <div className="col-md-8 d-md-block d-none">DESCRIPTION</div>
                    <div className="col-md-2 d-md-block d-none">DUE</div>
                    <div className="col-md-2 d-md-block d-none">ACTIONS</div>
                </div>
                {
                    this.props.outstandingTaskList.map(
                        (taskItem) => <OutstandingTask
                            key={taskItem.taskID}
                            item={taskItem}
                            doneClickedFunc={this.props.doneClickedFunc}
                            deleteTaskFunc={this.props.deleteTaskFunc}
                        />
                    )
                }

            </div>
        );
    }
}



export default OutstandingTaskList;