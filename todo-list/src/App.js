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
    };
    this.FootRef =React.createRef();
  };
  _changeFinshed = (todoId,finished) =>{
    const todoTemplate = this.state.todos;
    let finishedCount = 0;
    todoTemplate.forEach( (item,index) => {
      if(item.id === todoId){
        item.finished = finished;
      }
    })
    todoTemplate.forEach( (item,index) => {
      if(item.finished){
        finishedCount+=1;
      }
    })
    
    this.setState({
      todos:todoTemplate,
      finishedCount
    })
  };
  _romeItem = (todoId) =>{
    const oldTodos = this.state.todos;
    let finishedCount = 0;
    oldTodos.forEach((item,index) => {
      if(item.id===todoId){
       oldTodos.splice(index,1);
      }
    })
    oldTodos.forEach( (item,index) => {
      if(item.finished){
        finishedCount+=1;
      }
    })
    this.setState({
      todos:oldTodos,
      finishedCount
    })
  };
  _addOneTodo =(title) => {
    let todoTmp = this.state.todos;
    const todo = {id: todoTmp.length===0?1:todoTmp[todoTmp.length-1].id+1,
       title, finished: false};
       todoTmp.push(todo);
       this.setState({
         todos:todoTmp
       })
  };
  _deleAllFinsed = () => {
    let todoTmp = this.state.todos;
    let arr = [];
    todoTmp.forEach(item => {
      if(!item.finished){
        arr.push(item);
      }
    })
    this.setState({
      todos:arr,
      finishedCount: 0
    })
    this.FootRef.current._isCheckedFalse();
  };
  _footCheckAll = (isChecked) => {
    const todosTmp = this.state.todos;
	let finishedCount = 0;
    if(!todosTmp.length && isChecked){
      this.FootRef.current._isCheckedFalse();
      return;
    }
    todosTmp.forEach(item => {
      if(isChecked){
        if(!item.finished){
          item.finished = true;
        }
		finishedCount = todosTmp.length;
      }else{
        if(item.finished){
          item.finished = false;
        }
		finishedCount =0;
      }
    })
    this.setState({
      todos:todosTmp,
	  finishedCount
    })
  };
  render() {
    const {todos,finishedCount} = this.state;
    return (
      <div className="App">
      <div className="todo-container">
    <div className="todo-wrap">
      <Head
        _addOneTodo={this._addOneTodo}
      />
      <List 
      _romeItem={this._romeItem}
      _changeFinshed={this._changeFinshed}
      tods={todos}
      />
      <Foot
      ref={this.FootRef}
      finishedCount={finishedCount}
      totalCount={todos.length}
      _deleAllFinsed={this._deleAllFinsed}
      _footCheckAll={this._footCheckAll}
      />
    </div>
  </div>
    </div>
    )
  };
 
}

export default App;
