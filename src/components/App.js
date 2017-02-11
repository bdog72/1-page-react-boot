
import React, {Component} from 'react'
import {browserHistory, Router, Route} from 'react-router'
import Layout from './Layout'
import Home from './Home'
// import Seafood from './Seafood'
// import Burgers from './Burgers'
// import Wings from './Wings'
// import Pizza from './Pizza'

export default class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/Seafood' component={Seafood} />
        <Route path='/About' component={Burgers} />
        <Route path='/About' component={Wings} />
        <Route path='/About' component={Pizza} />
      </Route>
    </Router>
  }
}
