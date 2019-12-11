import React from 'react';
import { Component } from 'react';
import './App.css';
import axios from 'axios';

class MattTest extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'unknown',
      date: new Date()
    };
  }

  fetchFromApi() {
    axios.get('/api/')
    .then(response => {
      // handle success
      console.log(response);
      console.log(response.data.name);
      this.setState({
        name: response.data.name
      });
    })
    .catch(e => {
      // handle errors
      console.log(e);
      this.setState({
        name: 'acatach'
      });
    });
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.apiID = setInterval(
      () => this.fetchFromApi(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return(
      <div className="Matt">
        <body>
          <p>
            This is matt
          </p>
          <p>
            The second name is {this.state.name}
          </p>
          <p>
            The date is {this.state.date.toLocaleTimeString()}
            Axios Default Port {axios.defaults.port }
          </p>
        </body>
      </div>
    );
  }
};

export default MattTest;
