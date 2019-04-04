import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';
import EliGram from './EliGram';
import withAuthenticate from './Components/Authentication/withAuthenticate';
import Login from './Components/Authentication/Login';
import './App.css';


  
    
class App extends Component {
  constructor() {
      super();
      this.state = {
          loggedIn: false,
          username: '',
          password: '',
      }
    };

    handleUsernameChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    loginSubmit = e => {
        ((this.state.username) && (this.state.password)) ? (
            this.setState({ loggedIn: true })) : (this.setState({ loggedIn: false }));
        
   
   
    }
  
  

  render() {
    
    return (
        <div className="App">
            {/* <Login
                stuff={this.state}
                handleChange={this.handleUsernameChange}
                loginSubmit={this.loginSubmit}
            />

            <EliGram /> */}
            <ComponentFromWithAuthenticate />

      </div>
    );
  }
}
const ComponentFromWithAuthenticate = withAuthenticate(EliGram)(Login);
export default App;
