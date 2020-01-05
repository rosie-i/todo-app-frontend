import React from 'react';

class NewTaskInput extends React.Component {
    render() {
        return (
            <div className="row newTask">
                <div className="col-6 text-right">
                    <input type="text" name="taskname" placeholder="Enter task here..." />
                </div>
                <div className="col-6 text-left">
                    <input type="date" />
                    <button type="button">+</button>
                </div>
            </div>
        );
    }
}
    
export default NewTaskInput;