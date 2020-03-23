import React, { Component } from 'react'
import Header from './components/Header'
import Movie from './components/Movie'

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <main>
          <Movie></Movie>
        </main>
      </>
    )
  }
}

export default App
