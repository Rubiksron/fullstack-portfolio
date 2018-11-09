import React, { Component } from 'react';

const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  componentWillMount() {
    fetch(POKEMON_API)
      .then(res => res.json())
      .then(data => this.setState({ pokemon: data.results }));
  }

  render() {
    const pokemon = this.state.pokemon.map((post, i) => (
      <ol key={i}>
        <h2>{post.name}</h2>
        <a href={post.url}><h2>abilities</h2></a>
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

export default Pokemon;
