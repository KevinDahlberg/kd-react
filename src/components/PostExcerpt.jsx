import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostExcerpt extends Component {

  excerptBox (postInfo) {
    console.log(postInfo)
    const postPath = postInfo.title.rendered.toLowerCase().toString().replace(/\s/g,'-')
    const excerpt = postInfo.excerpt.rendered
    return (
        <Link to={postPath}>
            <div className="row">
                <h1>{postInfo.title.rendered}</h1>
            </div>
            <div className="row">
                <div dangerouslySetInnerHTML={{__html: excerpt}} />
            </div>
        </Link>
    )
  }

  render() {
    return (
      <div className="excerpt-box row">
        {this.props.posts.map((post, idx) => {
            return (
              <div className="col-md-6" key={idx}>
              {this.excerptBox(post)}
              </div>
            )
          })
        }
      </div>
    )
  }
}