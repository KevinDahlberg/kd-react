import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import FaBars from 'react-icons/lib/fa/bars'

export default class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }

    this.handleClick = this.handleClick.bind(this)
  }



  handleClick() {
    const linksEl = document.querySelector('.narrow-links');
    if(linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block'
    }
  }

  render() {

    return (
      <nav className="nav-wrapper">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
              <h1>Kevin Dahlberg</h1>
              <div>
              <NavLink className="nav-item" to="/about">About</NavLink>
              <NavLink className="nav-item" to="/home">Home</NavLink>
              <NavLink className="nav-item" to="/portfolio">Portfolio</NavLink>
              </div>
          </div>
        </div>
      </nav>
    )
  }
}