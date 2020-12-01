import React from 'react';
import './App.css';

function App() {
  // With JSX:
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>Hello from JSX!</h1>
  //     </header>
  //   </div>
  // );

  // Without JSX:
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement("header",
      { className: "App-header" },
      React.createElement("h1",
        null,
        "Hello from JSX!"
      )
    )
  );
}

export default App;
