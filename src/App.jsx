import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import Post from './views/Post'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            aboutPage: []
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
        fetch('http://wordpress.kevindahlberg.com/wp-json/wp-rest-routes/v2/content/posts', init)
            .then((response) => {
                return response.json()
            })
            .then((posts) => {
                console.log(posts.posts)
               this.setState({posts: posts.posts})
               console.log(this.state)
            })
    }

    /**
     * @function fetchAboutPage
     * @param {*} pageName 
     * @return sets state as about page
     * @since 1.0
     */
    fetchAboutPage(pageName) {
        const init = {
            method: 'GET'
        }
        const url = 'http://wordpress.kevindahlberg.com/wp-json/wp/v2/pages?slug=' + pageName
        fetch(url, init)
        .then((response) => {
            return response.json()
        })
        .then((page) => {
            this.setState({aboutPage: page})
        })
    }

    componentDidMount() {
        this.fetchPosts();
        this.fetchAboutPage('about');
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

        if (this.state.posts.length === 0 && this.state.aboutPage.length === 0) {
            return (
                <div>
                    <div className="col-xs-12 placeholder" />
                </div>
            )
        } else {
            return (
                <Router>
                    <div className="body">
                        <div className="content-body">
                            <Switch>
                                <PropsRoute path='/home' component={Home} {...this.state} />
                                <PropsRoute path='/:title' component={Post} {...this.state} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            )
        }
    }
}