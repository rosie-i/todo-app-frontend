import React from 'react';
import OutstandingTask from './OutstandingTask';

class OutstandingTaskList extends React.Component {
    render() {
        return (
            <div>
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