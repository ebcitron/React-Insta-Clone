import React, { Component } from 'react';
import './dummy-data';
import dummyData from './App.css';
import PostContainer from './Components/PostContainer/PostContainer';

// const ADummyData = {
  
//     id: dummyData.id,
//       username: dummyData.username,
//         thumbnailUrl: dummyData.thumbnailUrl,
//           imageUrl: dummyData.imageUrl,
//             likes: dummyData.likes,
//               timeStamp: dummyData.timeStamp,
//   }



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
