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
          <div className="row align-items-center d-flex justify-content-between topbar">
            <div className="col-xs"></div>
            <NavLink className="col-xs nav-header" to="/home">Kevin Dahlberg</NavLink>
            <NavLink className="col-xs" to="/about">About</NavLink>
          </div>
          <div className="topnav">
            <NavLink to="/home">Home</NavLink>
          </div>
          <div className="topnav-narrow">
            <FaBars className="nav-icon" onClick={this.handleClick}></FaBars>
              <div className="narrow-links">

              </div>
          </div>
        </div>
      </nav>
    )
  }
}