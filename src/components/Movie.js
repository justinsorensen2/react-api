import React, { Component } from 'react'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: [],
    }
  }

  componentDidMount() {
    // once the app is added to the page, make an API call to load the data
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=16dccf4635fc67bb4bf1e38c0a4459dd'
    )
      .then(response => {
        // console.log(response)
        return response.json()
      })
      .then(movie => {
        this.setState({
          movieList: movie.results,
        })
      })
  }
  render() {
    let alt = `${this.props.title} poster`
    return (
      <ul>
        {this.state.movieList.map(movie => {
          return (
            <li key={movie.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    ID:{movie.id} Title:
                    {movie.title}
                  </h5>
                  <article className="card-image">
                    <img
                      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
                    />
                  </article>
                  <p className="card-text">{movie.overview}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Movie
