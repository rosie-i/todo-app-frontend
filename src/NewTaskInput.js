import React from 'react';

class NewTaskInput extends React.Component {

    state = {
        newTaskDescription: "No task entered",
        newTaskDueDate: "Whenever..."
    }

    addTask = () => {
        this.props.addTaskFunc(this.state.newTaskDescription, this.state.newTaskDueDate)    
    }

    taskDescriptionChanged = (event) => {
        this.setState({
          newTaskDescription: event.target.value
        });
    }


    // This works but date format is yyyy-mm-dd instead of dd/mm/yyyy
    // The former is ISO 8601 format, look into changing (with webcomponents or HTML5?)
    taskDateChanged = (event) => {
        this.setState({
          newTaskDueDate: event.target.value
        });
    }


    render() {
        return (
            <div className="row newTask">
                <div className="col-6 text-right">
                    <input type="text" name="taskname" placeholder="Enter task here..." onChange={this.taskDescriptionChanged} />
                </div>
                <div className="text-left">
                    <input type="date" onChange={this.taskDateChanged} />
                    <button type="button" onClick={this.addTask}>+</button>
                </div>
            </div>
        );
    }
}
    
export default NewTaskInput;