import React, { Component } from 'react';
import Todo from './Todo'
import {connect} from 'react-redux'

class TodosContainer extends Component {

  render() {
      let allTodos = this.props.todo.map((eachTodo, index)=>{
        return <Todo key={index} todo={eachTodo}/>
      })
    return (
      <div>
        {allTodos}
      </div>
    );
  }

}

const mapStateToProps =(state)=>{
  return {todo: state.todos}
}

export default connect(mapStateToProps)(TodosContainer);
