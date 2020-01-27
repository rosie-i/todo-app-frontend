import React from 'react';

class NewTaskInput extends React.Component {

    addTask = () => {
        this.props.addTaskFunc("Finish React app", "30/01/2020")
    }

    render() {
        return (
            <div className="row newTask">
                <div className="col-6 text-right">
                    <input type="text" name="taskname" placeholder="Enter task here..." />
                </div>
                <div className="col-6 text-left">
                    <input type="date" />
                    <button type="button" onClick={this.addTask}>+</button>
                </div>
            </div>
        );
    }
}
    
export default NewTaskInput;