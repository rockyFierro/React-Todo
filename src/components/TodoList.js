import React from 'react';
// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class toDoList extends React.Component {
    constructor(){
        super();

    }

    render(){
        return(
            <div>
          {console.log(this.props)}
            </div>

        )
    }
}

export default toDoList;
