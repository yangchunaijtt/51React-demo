import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import RAbout from "../components/pages/rabout"
import RContaine from "../components/pages/rContaine";
import RHome from "../components/pages/rHome"
import Flower from "../components/pages/flower"
import Login from "../components/pages/login"


const  Routers = () => {
  return (
    <Router>
      <ul>
        <li><Link to="/">主页</Link></li>
        <li><Link to="/rabout/">RAbout 组件</Link></li>
        <li><Link to="/rcontaine/aaa">RContaine 组件</Link></li>
        <li><Link to="/flower/111">Flower 组件</Link></li>
      </ul>
      <Route>
        <Switch>
          <Route path="/" exact component={RHome} />
          <Route path="/rabout"  component={RAbout} />
          <Route path="/rcontaine/"  component={RContaine} />
          <Route path="/login" component={Login} />
          <Route path="/flower/:id" exact component={Flower} />
        </Switch>
      </Route>
    </Router>
  )
}

export default Routers;