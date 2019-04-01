import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
          }
  }
  render() {
    console.log("CLOG APP STATE PROPS", this.state.dummyData, this.props);
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <PostContainer postData={this.state.data} />

      </div>
    );
  }
}

export default App;
