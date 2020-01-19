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


class App extends React.Component {

  state = {
    tasks: [
      { id: 1, description: "Buy milk", due: "20/01/2020", completed: false},
      { id: 2, description: "Hang out laundry", due: "21/01/2020", completed: false},
      { id: 3, description: "Get a corgi", due: "22/01/2020", completed: false}
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


  render() {
    return (
      <body>
        <Header />
        <div className="container">
              <NewTaskInput />
              <OutstandingTaskTitle />
              <OutstandingTaskCount outstandingTaskCount={this.state.tasks.length} />
              <OutstandingTaskList taskList={this.state.tasks} deleteTaskFunc={this.deleteTask} />
              <CompletedTaskTitle />
              <CompletedTaskCount />
              <CompletedTaskList />
        </div>
      </body>  
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
