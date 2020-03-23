import React, { Component } from 'react'

class Movie extends Component {
  render() {
    let url = `https://image.tmdb.org/t/p/w500${this.props.poster_path}`
    let alt = `${this.props.title} poster`
    return (
      <li key={this.props.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              ID:{this.props.id} Title:{this.props.title}
            </h5>
            <article className="card-image">
              <img src={url} alt={alt} />
            </article>
            <p className="card-text">{this.props.overview}</p>
          </div>
        </div>
      </li>
    )
  }
}

export default Movie
