import React from 'react';
import './App.css'; 
import TextEditor from './TextEditor'; 

function App() {
  return (
    <div className="App">
      <h1>My Text Editor</h1> {/* Application title */}
      <TextEditor /> {/* Text editor component */}
    </div>
  );
}

export default App;
