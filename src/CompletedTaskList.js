import React from 'react';
import CompletedTask from './CompletedTask';

class CompletedTaskList extends React.Component {
    render() {
        return (
            <div className="taskListBorder">
                <div className="row gridContainerOutstandingHeader">
                    <div className="col-md-8 d-md-block d-none">DESCRIPTION</div>
                    <div className="col-md-4 d-md-block d-none">DUE</div>
                </div>
                {
                    this.props.completedTaskList.map(
                        (taskItem) => <CompletedTask
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

export default CompletedTaskList;