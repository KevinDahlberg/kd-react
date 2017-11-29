import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPost: []
        }
    }

    componentDidMount(){
        const currentPostTitle = this.props.match.params.title
        this.filterCurrentPost(this.props, currentPostTitle)
    }

    filterCurrentPost(props, postTitle) {
        const posts = props.posts
        const singlePost = posts.filter((post) => {return post.slug === postTitle})
        console.log(singlePost)
        this.setState({currentPost: singlePost})
    }

    render() {
        if (this.state.currentPost.length === 0) {
          return (
              <div>
                <div className="col-xs-12 placeholder" />
              </div>
          )
        } else {
            const singlePost = this.state.currentPost[0]
          return (
              <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-9 post-content">
                        <h1>{singlePost.title.rendered}</h1>
                        <div>
                            <div dangerouslySetInnerHTML={{__html: singlePost.content.rendered}} />
                        </div>
                    </div>
                </div>
              </div>
          )
        }
      }
}