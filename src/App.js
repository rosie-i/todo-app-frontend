import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './Header';
import NewTaskInput from './NewTaskInput';
import OutstandingTaskTitle from './OutstandingTaskTitle';
import OutstandingTaskCount from './OutstandingTaskCount';
import OutstandingTask from './OutstandingTask';
import CompletedTaskTitle from './CompletedTaskTitle';
import CompletedTaskCount from './CompletedTaskCount';
import CompletedTask from './CompletedTask';


class App extends React.Component {

  state = {
    tasks: [
      { id: 1, description: "Buy milk", completed: false},
      { id: 2, description: "Hang out laundry", completed: false},
      { id: 3, description: "Get a corgi", completed: false}
    ]      
  }
  

  render() {
    return (
      <body>
        <Header />

        <div className="container">
              <NewTaskInput />

              <OutstandingTaskTitle />

              <OutstandingTaskCount />

              <OutstandingTask />


              <CompletedTaskTitle />

              <CompletedTaskCount />

              <CompletedTask />

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
