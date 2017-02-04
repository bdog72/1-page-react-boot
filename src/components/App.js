// import React, { Component } from 'react'
// import { Button } from 'react-bootstrap'
// export default class App extends Component {
//
//   render () {
//     return <div>
//       <h1>Hello Bdog</h1>
//       <Button bsStyle='danger' bsSize='large' />
//     </div>
//   }
// }
import React, {Component} from 'react'
import {browserHistory, Router, Route} from 'react-router'
// import {browserHistory, Router, Route} from 'react-router-bootstrap'
import Layout from './Layout'
import Home from './Home'
export default class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
      </Route>
    </Router>
  }
}
