import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';


class EliGram extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchValue: '',
      filtered:[]
    }
  }

  handleChange = e => {

    this.setState({ [e.target.name]: e.target.value });
    

  }


  componentDidMount() {
    
    this.setState({ data: dummyData });
  
  }

  search = e => {
    const filteredData = this.state.data.filter(data => {
      if ((data.username.includes(this.s      tate.searchValue))&&(this.state.searchValue)){
        return data;
      }
    });

    this.setState({ data: filteredData });
  };


  render() {
    console.log("CLOG APP STATE PROPS", this.state.dummyData, this.props);
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar
            searchValue={this.state.searchValue}
            searchData={this.state.data}
            searchSubmit={this.search}
            handleChange={this.handleChange}
          />
        </header>
        <PostContainer
          postData={this.state.data}
          handleChange={this.handleChange}

        />

      </div>
    );
  }
}

export default EliGram;
