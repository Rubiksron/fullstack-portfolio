import React, { Component } from 'react';

const __POKEMON_API__ = 'https://pokeapi.co/api/v2/pokemon/';
const __JSONPLACEHOLDER_API__ = 'https://jsonplaceholder.typicode.com/';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // posts: []
    };
  }

  componentWillMount() {
    fetch(__POKEMON_API__)
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    // const postItems = this.state.posts.map(post => (
    //   <div key={post.id}>
    //     <h3>{post.title} - {post.id}</h3>
    //     <p>{post.body}</p>
    //   </div>
    // ))
    return (
      <div>
        <h1>Posts:</h1>
      </div>
    )
  }
}

export default Posts;
