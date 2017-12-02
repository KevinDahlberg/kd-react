import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerItems: ["Web", "Wordpress", "Plugin", "React", "Javascript", "Angular", "Node", "PHP"],
            currentHeaderItem: "Web"
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    pickHeaderTitle () {
        const titleArray = this.state.headerItems
        const titleIndex = this.getRandomInt(0, (titleArray.length - 1))
        const title = titleArray.slice(titleIndex, titleIndex+1)

        this.setState({currentHeaderItem: title});
    }

    componentDidMount() {
        this.startTitles = setInterval(() => this.pickHeaderTitle(), 1500);
    }

    componentWillUnmount() {
        clearInterval(this.startTitles)
    }

    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 header-content">
                            <div className="row">
                                <h1>Kevin Dahlberg</h1>
                            </div>
                            <div className="row">
                                <h1>{this.state.currentHeaderItem}</h1>
                            </div>
                            <div className="row">
                                <h1>Developer.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end d-flex justify-content-around header-bottom">
                        <Link className="nav-item col-xs" to="/about">About</Link>   
                        <Link className="nav-item col-xs" to="/contact">Contact</Link>
                        <Link className="nav-item col-xs" to="/portfolio">Portfolio</Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;