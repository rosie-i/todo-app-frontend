import React from 'react';

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
    outstandingTasks: [
      { id: uuidv1(), description: "Buy milk", due: "2020-02-28", completed: false },
      { id: uuidv1(), description: "Hang out laundry", due: "2020-02-26", completed: false },
      { id: uuidv1(), description: "Get a corgi", due: "2021-05-28", completed: false }
    ],
    completedTasks: [
      { id: uuidv1(), description: "Buy newspaper", due: "2020-02-25", completed: true },
    ]
  }



  deleteTask = (taskID) => {
    // Tasks will be deleted when this function executes
    // 1. Get list of tasks from state
    let tasks = this.state.outstandingTasks;
    // 2. Identify task that matches the given taskID and remove it
    let updatedTasks = tasks.filter(item => item.id !== taskID);
    // 3. Update state to reflect deletion with new collection of tasks (i.e. without the one we just deleted)
    this.setState({
      outstandingTasks: updatedTasks
    });
  }

  addTask = (newTaskDescription, newTaskDueDate) => {
    // Task will be added when this function executes

    // 1. Define the task that is being added
    const taskToAdd = { id: uuidv1(), description: newTaskDescription, due: newTaskDueDate, completed: false }

    // 2. Get current array of tasks from state
    let tasksToDo = this.state.outstandingTasks;

    // 3. Add new task object (taskToAdd) to the array
    tasksToDo.push(taskToAdd);

    // 4. Update state to reference new array with added task
    this.setState({
      outstandingTasks: tasksToDo
    });
  }

  doneClicked = (taskID) => {
    // When this executes, task will change to completed: true and therefore move from outstanding task list to completed

    // 1. Find task to update (from list of tasks in state)
    let tasks = this.state.outstandingTasks;

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskID) {
        // 2. Update the completed property from false to true
        tasks[i].completed = true;
        break;
      }
    }

    // 3. Update state
    this.setState({
      outstandingTasks: tasks
    });

    // Get the list of outstanding tasks from state
    let outstandingTaskList = this.state.outstandingTasks;

    let completedTask;
    for (let i = 0; i < outstandingTaskList.length; i++) {
      // Identify item marked as complete
      if (outstandingTaskList[i].id === taskID) {
        // Remove item from array of outstanding tasks
        completedTask = outstandingTaskList[i];
        outstandingTaskList.splice(i, 1);
        break;
      }
    }
    // Push item to array of completed tasks
    const completedTaskList = this.state.completedTasks;
    completedTaskList.push(completedTask);
    
    // Update state 
    this.setState({
      outstandingTasks: outstandingTaskList,
      completedTasks: completedTaskList
    });
  }


  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <NewTaskInput addTaskFunc={this.addTask} />
          <OutstandingTaskTitle />
          <OutstandingTaskCount outstandingTaskCount={this.state.outstandingTasks.length} />
          <OutstandingTaskList
            outstandingTaskList={this.state.outstandingTasks}
            deleteTaskFunc={this.deleteTask}
            doneClickedFunc={this.doneClicked}
          />
          <CompletedTaskTitle />
          <CompletedTaskCount completedTaskCount={this.state.completedTasks.length}/>
          <CompletedTaskList 
            completedTaskList={this.state.completedTasks}
          />
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
