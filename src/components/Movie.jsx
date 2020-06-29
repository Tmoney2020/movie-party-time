import React, { Component } from 'react'
export class Movie extends Component {
  render() {
    const { original_title, overview, poster_path, release_date } = this.props
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <div className="titlePicture">
            <p className="movieTitle">{original_title}</p>
            <div className="img">
              <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} />
            </div>
          </div>
          <p className="plot">{overview}</p>
          <p className="release">{release_date} </p>
        </li>
      </ul>
    )
  }
}
