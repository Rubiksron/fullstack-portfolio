import React, { Component } from 'react';
import Posts from './components/Posts';
// import PostForm from './components/Postform'

class App extends Component {
  render() {
    return(
      <div>
        <h1>My React App! </h1>
        <hr />
        <Posts />
        <br />
      </div>
    )
  }
}

export default App;
