import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Foot from "./components/Foot"
import Head from "./components/Head"
import List from "./components/List"

/**
 * 执行yarn eject命令
npx create-react-app xxx
cd xxx
yarn eject
新建项目后要先执行 yarn eject 命令再修改，否则报错，需要重新建项目。
特别注意，整个过程是不可逆的。
 */
class App extends Component{
  constructor(props){
    super(props);
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
    return (
      <div className="App">
      <div className="todo-container">
    <div className="todo-wrap">
      <Head />
      <List />
      <Foot
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
