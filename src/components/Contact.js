
import React, {Component} from 'react'
import { Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap'
export default class Contact extends Component {
  render () {
    return <div>
      <h1>Contact</h1>
      <Button>Click me</Button>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src='http://www.dogbreedinfo.com/images24/BeagleBayleePurebredDogs8Months1.jpg'>
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle='primary'>Button</Button>&nbsp;
                <Button bsStyle='default'>Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src='http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/thumbnail/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F75%2F371580ca7a11e0ad9e12313817c323%2Ffile%2FBeagle-1-645mk062311.jpg'>
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle='primary'>Button</Button>&nbsp;
                <Button bsStyle='default'>Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src='http://www.welovebeagles.com/wp-content/gallery/beagles/2-of-a-beagle.jpg'>
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle='primary'>Button</Button>&nbsp;
                <Button bsStyle='default'>Button</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
);
    </div>
  }
}
