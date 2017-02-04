import React, {Component} from 'react'
import { Link } from 'react-router'
// import { LinkContainer } from 'react-router-bootstrap'
// import { Button } from 'react-bootstrap'
export default class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div>
      <nav>
        <ul>
          {/* <LinkContainer to={ pathname: '/' }>
            <Button bsSize='large' />
          </LinkContainer>
          <LinkContainer>
            <Button bsSize='large' />
          </LinkContainer>
          <LinkContainer>
            <Button bsSize='large' />
          </LinkContainer> */}
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/About'>About</Link></li>
        </ul>
      </nav>
      <main>{this.props.children}</main>
    </div>
  }
}
