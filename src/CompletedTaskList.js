import React from 'react';
import CompletedTask from './CompletedTask';

class CompletedTaskList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.completedTaskList.map(
                        (taskItem) => <CompletedTask
                            key={taskItem.id}
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