import React, { Component } from 'react';

const __POKEMON_API__ = 'https://pokeapi.co/api/v2/pokemon/';
const __JSONPLACEHOLDER_API__ = 'https://jsonplaceholder.typicode.com/posts';


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch(__POKEMON_API__)
    .then(res => res.json())
    .then(data => this.setState({ posts: data.results }));
  }

  render() {
    const pokemon = this.state.posts.map((post, i) => (
      <ol key={i}>
        name-
        {post.name}
      </ol>
    ));
    return (
      <div>
        { pokemon }
      </div>
    )
  }
  // render() {
  //   console.log('++++++++++++++', this.state.posts);
  //   const postItems = this.state.posts.map(post => (
  //     <li key={post.id}>
  //       {post.name}
  //     </li>
  //   ));
  //   return (
  //     <div>
  //       <h1>Posts:</h1>
  //       {postItems}
  //     </div>
  //   );
  // }
}

export default Posts;
