
import React, {Component} from 'react'
import { Button, Segment } from 'semantic-ui-react'
export default class About extends Component {

  render () {
    return <div>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Segment inverted>
        <Button inverted>Standard</Button>
        <Button inverted color='red'>Red</Button>
        <Button inverted color='orange'>Orange</Button>
        <Button inverted color='yellow'>Yellow</Button>
        <Button inverted color='olive'>Olive</Button>
        <Button inverted color='green'>Green</Button>
        <Button inverted color='teal'>Teal</Button>
        <Button inverted color='blue'>Blue</Button>
        <Button inverted color='violet'>Violet</Button>
        <Button inverted color='purple'>Purple</Button>
        <Button inverted color='pink'>Pink</Button>
        <Button inverted color='brown'>Brown</Button>
        <Button inverted color='grey'>Grey</Button>
        <Button inverted color='black'>Black</Button>
      </Segment>
      <Segment inverted>
        <Button basic inverted>Standard</Button>
        <Button basic inverted color='red'>Red</Button>
        <Button basic inverted color='orange'>Orange</Button>
        <Button basic inverted color='yellow'>Yellow</Button>
        <Button basic inverted color='olive'>Olive</Button>
        <Button basic inverted color='green'>Green</Button>
        <Button basic inverted color='teal'>Teal</Button>
        <Button basic inverted color='blue'>Blue</Button>
        <Button basic inverted color='violet'>Violet</Button>
        <Button basic inverted color='purple'>Purple</Button>
        <Button basic inverted color='pink'>Pink</Button>
        <Button basic inverted color='brown'>Brown</Button>
        <Button basic inverted color='grey'>Grey</Button>
        <Button basic inverted color='black'>Black</Button>
      </Segment>
      <Button>Click Here</Button>
      <Button>Bdog</Button>
    </div>
  }
}
