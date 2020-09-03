import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
     todoList: [{
      task:"make a list",
      id:Date.now(),
      completed: false
     }]
    };
    const  handleChange = e => {
   e.preventDefault();
    console.log(e);
   }
  
  const  handleSubmit = e => {
   e.preventDefault();
    console.log(e);
   }
  };

  render(){
    return(
     <div>
      <h1>TASKMASTER</h1>
      <TodoList todoList={this.state.todoList}/>

     </div>
    )}
};

export default App;
