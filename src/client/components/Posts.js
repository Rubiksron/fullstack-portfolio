import React, { Component } from 'react';

const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/';
const JSONPLACEHOLDER_API = 'https://jsonplaceholder.typicode.com/posts';


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch(POKEMON_API)
      .then(res => res.json())
      .then(data => this.setState({ posts: data.results }))
      .then(posts => console.log('API_DATA: ', this.state.posts[1]));
  }

  render() {
    const pokemon = this.state.posts.map((post, i) => (
      <ol key={i}>
        <h3>name:</h3>
        <h2>{post.name}</h2>
        <br />
        <a href={post.url}>abilities</a>
        <hr />
      </ol>
    ));
    return (
      <div>
        { pokemon }
      </div>
    );
  }
}

export default Posts;
