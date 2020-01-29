import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './Header';
import NewTaskInput from './NewTaskInput';
import OutstandingTaskTitle from './OutstandingTaskTitle';
import OutstandingTaskCount from './OutstandingTaskCount';
import OutstandingTaskList from './OutstandingTaskList';
import CompletedTaskTitle from './CompletedTaskTitle';
import CompletedTaskCount from './CompletedTaskCount';
import CompletedTaskList from './CompletedTaskList';
import uuidv1 from 'uuid/v1';


class App extends React.Component {

  state = {
    tasks: [
      { id: uuidv1(), description: "Buy milk", due: "20/01/2020", completed: false },
      { id: uuidv1(), description: "Hang out laundry", due: "21/01/2020", completed: false },
      { id: uuidv1(), description: "Get a corgi", due: "22/01/2020", completed: false }
    ]
  }

  // filter function could be useful to render a new array based on completed: true or completed: false


  deleteTask = (taskID) => {
    // Tasks will be deleted when this function executes
    // 1. Get list of tasks from state
    let tasks = this.state.tasks;
    // 2. Identify task that matches the given taskID and remove it
    let updatedTasks = tasks.filter(item => item.id !== taskID);
    // 3. Update state to reflect deletion with new collection of tasks (i.e. without the one we just deleted)
    this.setState({
      tasks: updatedTasks
    });
  }

  addTask = (newTaskDescription, newTaskDueDate) => {
    // Task will be added when this function executes

    // 1. Define the task that is being added
    const taskToAdd = { id: uuidv1(), description: newTaskDescription, due: newTaskDueDate, completed: false }

    // 2. Get current array of tasks from state
    let tasksToDo = this.state.tasks;

    // 3. Add new task object (taskToAdd) to the array
    tasksToDo.push(taskToAdd);

    // 4. Update state to reference new array with added task
    this.setState({
      tasks: tasksToDo
    });
  }

  doneClicked = (taskID) => {
    // When this executes, task will change to completed: true and be deleted from outstanding task list
    // 1. Find task to update (from list of tasks in state)
    let tasks = this.state.tasks;

    
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskID) {
        tasks[i].completed = true;
        console.log(tasks[i]);
        break;
      }
    }
    // 2. Update the completed property from false to true
    // 3. Update state
  }


  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <NewTaskInput addTaskFunc={this.addTask} />
          <OutstandingTaskTitle />
          <OutstandingTaskCount outstandingTaskCount={this.state.tasks.length} />
          <OutstandingTaskList
            taskList={this.state.tasks}
            deleteTaskFunc={this.deleteTask}
            doneClickedFunc={this.doneClicked}
          />
          <CompletedTaskTitle />
          <CompletedTaskCount />
          <CompletedTaskList />
        </div>
      </div>
    );
  }
}

// // NOTE: This code is the default React App.js code. It is a Functional (Stateless) Component.
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
