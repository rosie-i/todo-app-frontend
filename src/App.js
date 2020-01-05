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
  render() {
    return (
      <body id="mainBody">

          <div className="row">
            <div className="col-12">
              <Header />
            </div>
          </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <NewTaskInput />
            </div>
          </div>

          <div className="row">
            <OutstandingTaskTitle />
          </div>

          <div className="row">
            <OutstandingTaskCount />
          </div>

          <div className="row">
            <OutstandingTask />
          </div>

          <div className="row">
            <CompletedTaskTitle />
          </div>

          <div className="row">
            <CompletedTaskCount />
          </div>

          <div className="row">
            <CompletedTask />
          </div>

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
