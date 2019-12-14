import React from 'react';
import { Component } from 'react';

import axios from 'axios';

import Typography from '@material-ui/core/Typography'


class MattTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      age: null,
      time: null
    };
  }

  fetchFromApi() {

    axios.post('/api/comment', {
      text: "abc"
    })
      .then(response => {
        // handle success
        console.log(response);
        this.setState({
          name: response.data.name,
          age: response.data.age,
          time: response.data.time
        });
      })
      .catch(e => {
        // handle errors
        console.log(e);
        this.setState({
          name: 'ERROR'
        });
      });
  }

  componentDidMount() {
    this.apiID = setInterval(
      () => this.fetchFromApi(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.apiID);
  }

  render() {
    return (
      <React.Fragment>
        <Typography>
          This is a test of the backend API.
        </Typography>
        <Typography>
          Value returned from backend API is: {this.state.name} {this.state.age}.
        </Typography>
        <Typography>
          Time returned from backend API is: {this.state.time}.
        </Typography>
      </React.Fragment>
    );
  }
};

export default MattTest;
