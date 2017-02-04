import React, {Component} from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/About'>About</Link></li>
        </ul>
      </nav>
      <main>{this.props.children}</main>
    </div>
  }
}
