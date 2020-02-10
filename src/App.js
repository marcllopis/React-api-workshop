import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header/Header'
import {endpoint} from './utils/api/api'
import './App.css';


class App extends Component {

  state = {
    data: {},
    isDataLoaded: false,
    title: 'hello'
  }

  changeTitle = () => {
    this.setState({
      title: 'bye'
    })
  }
  // FETCH METHOD
  // componentDidMount() {
  //   fetch('https://api.github.com/users/?city=Barcelona&month=LastMonth')
  //     .then(response => response.json())
  //     .then(info =>
  //       this.setState({
  //         data: info,
  //         isDataLoaded: true,
  //       })
  //     )
  // }

  // AXIOS METHOD
  async componentDidMount() {
    const { data } = await axios(endpoint)
    this.setState({
      data,
      isDataLoaded: true,
    })
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} action={this.changeTitle} />
        {
          this.state.isDataLoaded
            ? <h1>{this.state.data.location}</h1>
            : <h3>Loading...</h3>
        }
      </div>
    );
  }
}


export default App;
