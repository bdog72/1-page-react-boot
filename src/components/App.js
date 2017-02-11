
import React, {Component} from 'react'
import {browserHistory, Router, Route} from 'react-router'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export default class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
      </Route>
    </Router>
  }
}
