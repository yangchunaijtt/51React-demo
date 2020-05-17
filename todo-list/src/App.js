import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Foot from "./components/Foot"
import Head from "./components/Head"
import List from "./components/List"

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
       todos: [
          {id: 1, title: '看一小时React的课程', finished: false},
          {id: 2, title: '打一小时台球', finished: false},
          {id: 3, title: '看一小时Java的课程', finished: false},
          {id: 4, title: '看一小时Python的课程', finished: false},
      ],
      finishedCount: 0
    }
  };
  _romeItem = (todoId) =>{
    console.log(11,todoId);
    const oldTodos = this.state.todos;
    oldTodos.forEach((item,index) => {
      if(item.id===todoId){
       oldTodos.splice(index,1);
      }
    })
    this.setState({
      todos:oldTodos
    })
  };
  render() {
    const {todos} = this.state;
    return (
      <div className="App">
      <div className="todo-container">
    <div className="todo-wrap">
      <Head/>
      <List 
      _romeItem={this._romeItem}
      tods={todos}
      />
      <Foot/>
    </div>
  </div>
    </div>
    )
  };
 
}

export default App;
