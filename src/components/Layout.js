import React, {Component} from 'react'

  static propTypes = {
    children: React.PropTypes.element.isRequired
}
export default class Layout extends Component {
    render() {
        return <div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </nav>
            <main>{this.props.children}</main>
        </div>
    }
}
