import React, { Component } from 'react';
import NavbarComp from './headerComponent';
import {Jumbotron, Button} from 'react-bootstrap';
import {getJSON} from 'jquery';
import ReditData from './dataComponent';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      redditData: '',
      show: false
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(event) {
    this.setState({ show: true });

    getJSON('https://www.reddit.com/subreddits/search.json?q=reactjs')
      .then((response) => {
        const {data: {children}} = response;
        this.setState({ redditData: children, show: false });
      }).catch(error => {
        this.setState({ error: false });
      });
  }

  render() {
    const {redditData, show, error} = this.state;
    return (
      <div>
        <NavbarComp/>
        <Jumbotron>
          <h1>Hello,</h1>
          <p>To retrieve the subreddits that are for ReactJS click on the button below.</p>
          <p>
            <Button
              onClick={this.fetchData}
              bsStyle="primary">Fetch data
            </Button>
          </p>
        </Jumbotron>
        <ReditData
          show={show}
          error={error}
          reddit={redditData}
        />
      </div>
    )
  }
}
