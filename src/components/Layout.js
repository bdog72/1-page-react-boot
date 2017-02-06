import React, {Component} from 'react'
import { Link } from 'react-router'
import { Menu, Dropdown } from 'semantic-ui-react'
export default class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <nav>
        {/* semantic-ui-react Links */}
        <Menu className='menu1'>
          <Menu.Item as={Link} to='/'>Home</Menu.Item>
          <Menu.Item as={Link} to='/Contact'>Contact</Menu.Item>
          <Menu.Item as={Link} to='/About'>About</Menu.Item>
        </Menu>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/About'>About</Link></li>
        </ul>
        <Menu vertical>
          <Dropdown item text='Pages'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/'>Home</Dropdown.Item>
              <Dropdown.Item as={Link} to='/Contact'>Contact</Dropdown.Item>
              <Dropdown.Item as={Link} to='/About'>About</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </nav>
      <main>{this.props.children}</main>
    </div>
  }
}
