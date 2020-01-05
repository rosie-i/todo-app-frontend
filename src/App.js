import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './Header';
import AddTask from './AddTask';

class App extends React.Component {
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header />
            </div>
            <div className="col-12">
              <AddTask />
            </div>
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
