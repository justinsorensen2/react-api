import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Most Popular Films of 1989</h1>
        <h3>Sorted by Popular Vote</h3>
        <h4>
          *Data Courtesy of <a href="themoviedb.org">themoviedb.org</a>*{' '}
        </h4>
      </div>
    )
  }
}

export default Header
