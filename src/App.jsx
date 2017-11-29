import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import Navbar from './components/Navbar'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }   

    /** db methods*/
    /**
     * @function fetchPosts
     * @return Array of Posts as State
     * @since 1.0
     */
    fetchPosts() {
        const init = {
            method: 'GET'
        }
        fetch('http://wordpress.kevindahlberg.com/wp-json/wp/v2/posts?_embed=true', init)
            .then((response) => {
                return response.json()
            })
            .then((posts) => {
               this.setState({posts: posts})
            })
    }

    componentDidMount() {
        this.fetchPosts();
    }

    render() {

        const renderMergedProps = (component, ...rest) => {
            const finalProps = Object.assign({}, ...rest);
            return (
            React.createElement(component, finalProps)
            );
        }
        
        const PropsRoute = ({ component, ...rest }) => {
            return (
            <Route {...rest} render={routeProps => {
                return renderMergedProps(component, routeProps, rest);
            }}/>
            );
        }

        return (
            <Router>
                <div className="body">
                    <Navbar />
                    <div className="content-body">
                        <Switch>
                                <PropsRoute path='/home' component={Home} {...this.state} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}