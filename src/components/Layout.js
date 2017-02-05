import React, {Component} from 'react'
import { Link } from 'react-router'
import { Menu } from 'semantic-ui-react'
export default class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <nav>
        <ul>
          {/* semantic-ui-react Links */}
          <Menu>
            <Menu.Item as={Link} to='/'>Home</Menu.Item>
            <Menu.Item as={Link} to='/Contact'>Contact</Menu.Item>
            <Menu.Item as={Link} to='/About'>About</Menu.Item>
          </Menu>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/About'>About</Link></li>
        </ul>
      </nav>
      <main>{this.props.children}</main>
    </div>
  }
}
