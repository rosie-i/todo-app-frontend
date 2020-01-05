import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './Header';
import AddTask from './AddTask';
import NewTaskInput from './NewTaskInput';
import OutstandingTaskTitle from './OutstandingTaskTitle';
import OutstandingTaskCount from './OutstandingTaskCount';


class App extends React.Component {
  render() {
    return (
      <div className="container">

        <div className="row" style={{backgroundColor: "pink"}}>
          <div className="col-12">
            <Header />
          </div>
        </div>

        <div className="row" style={{ backgroundColor: "cornflowerblue" }}>
          <div className="col-12">
            <NewTaskInput />
          </div>
        </div>

        <div className="row" style={{backgroundColor: "teal" }}>
          <OutstandingTaskTitle />
        </div>

        <div className="row" style={{backgroundColor: "yellow"}}>
          <OutstandingTaskCount />
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
