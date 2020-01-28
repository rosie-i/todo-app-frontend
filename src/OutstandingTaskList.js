import React from 'react';
import OutstandingTask from './OutstandingTask';

class OutstandingTaskList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.taskList.map(
                        (taskItem)=><OutstandingTask key={taskItem.id} item={taskItem} deleteTaskFunc={this.props.deleteTaskFunc} />
                    )
                }

            </div>
        );
    }
}



export default OutstandingTaskList;