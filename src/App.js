import React from 'react';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
     todoList: [{
      task:"",
      id:"",
      completed: false
     }]
    };


  };


  render(){
    return(
     <div>
      <h1>TASKMASTER</h1>
     </div>
    )}
};

export default App;
