import React, { Component } from 'react'
import { Movie } from './components/Movie'

class App extends Component {
  state = {
    movies: [],
    filterText: '',
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=114ca3d27b657709b4bfc03c1547a91c'
    )
      .then(response => {
        return response.json()
      })
      .then(moviesFromApi => {
        this.setState({ movies: moviesFromApi.results })
      })
  }

  handleTextChange = event => {
    const value = event.target.value

    this.setState({ filterText: value })
  }

  render() {
    const filteredMovies = this.state.movies.filter(movie =>
      movie.original_title
        .toUpperCase()
        .includes(this.state.filterText.toUpperCase())
    )

    const moviesToReturn = filteredMovies.map(movie => (
      <Movie
        original_title={movie.original_title}
        poster_path={movie.poster_path}
        overview={movie.overview}
        release_date={movie.release_date}
      />
    ))

    return (
      <body>
        <div className="container p-4">
          <div className="jumbotron">
            <h1 className="display-4">Movie Database!</h1>
            <p>I'm getting too old for this Riggs!</p>
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              <input
                type="text"
                placeholder="Search"
                className="form-control"
                value={this.state.filterText}
                onChange={this.handleTextChange}
              />
            </li>
          </ul>
          {moviesToReturn}
        </div>
      </body>
    )
  }
}

export default App
