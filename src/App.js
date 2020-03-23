import React, { Component } from 'react'
import Header from './components/Header'
import axios from 'axios'
var img = 'https://image.tmdb.org/t/p/w500'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
        {
          id: 666,
          title: 'Bob Smith Goes to Hell',
          poster_path: '/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg',
          overview: 'Sometimes people get what they deserve.',
          url: 'string',
          alt: 'alt',
        },
        {
          id: 89,
          title: 'Indiana Jones and the Last Crusade',
          poster_path: '/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg',
          overview:
            'When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his fathers footsteps and stop the Nazis from recovering the power of eternal life.',
          url: 'string',
          alt: 'alt',
        },
      ],
    }
  }

  componentDidMount() {
    // once the app is added to the page, make an API call to load the data
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=16dccf4635fc67bb4bf1e38c0a4459dd'
      )
      .then(res => {
        const movies = res.data
        if (this.state.movies.url == '') {
          this.state.movies.url = `https://image.tmdb.org/t/p/w500${this.state.movies.poster_path}`
        } else if (this.state.movies.alt == '') {
          this.state.movies.alt = `${this.state.movies.title} poster`
        }
        this.setState({ movies })
      })
  }

  render() {
    const movieList = this.state

    let movie = this.state.movies

    return (
      <>
        <Header></Header>
        <main>
          <ul>
            {this.state.movies.map(movie => (
              <li key={movie.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      ID:{movie.id} Title:{movie.title}
                    </h5>
                    <article className="card-image">
                      <img src={movie.url} alt={movie.alt} />
                    </article>
                    <p className="card-text">{movie.overview}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </>
    )
  }
}

export default App
