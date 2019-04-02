import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: '',
      filtered: []
    }
  }

  handleChange = e => {

    this.setState({ [e.target.name]: e.target.value });

  }
  // componentDidUpdate() {
  //   this.setState({filtered: da})
  // }
  componentDidMount() {
    
    this.setState({ data: dummyData})
  }
  render() {
    console.log("CLOG APP STATE PROPS", this.state.dummyData, this.props);
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar
            search={this.state.search}
            searchSubmit={this.searchSubmit}
            handleChange={this.handleChange}
          />
        </header>
        <PostContainer
          postData={this.state.data}

        />

      </div>
    );
  }
}

export default App;
