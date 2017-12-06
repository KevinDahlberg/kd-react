import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostExcerpt extends Component {

  excerptBox (postInfo) {
    console.log(postInfo)
    const postPath = postInfo.title.toLowerCase().toString().replace(/\s/g,'-')
    const excerpt = postInfo.excerpt
    return (
        <Link to={postPath}>
            <div className="row">
              <div className="col-lg-4">
                <img src={postInfo.featured_media.sizes.thumbnail.source_url} alt={postInfo.featured_media.alt_text} />
              </div>
              <div className="col-lg-8">
                  <h1>{postInfo.title}</h1>
                  <div dangerouslySetInnerHTML={{__html: excerpt}} />
              </div>
            </div>
        </Link>
    )
  }

  render() {
    return (
      <div className="portfolio-container">
        <div className="row">
        <div className="portfolio-title col-12">
          <h1>Portfolio</h1>
        </div>
          <div className="col-12">
          <div className="excerpt-box row">
            {this.props.posts.map((post, idx) => {
                return (
                  <div className="col-md-6 excerpt-box" key={idx}>
                  {this.excerptBox(post)}
                  </div>
                )
              })
            }
          </div>
          </div>
        </div>
      </div>
    )
  }
}