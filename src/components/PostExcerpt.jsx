import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class PostExcerpt extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colorArray: ['#fad5a6', '#fbb79e', '#e25f70']
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  excerptTitle (title) {
    return (
      <div className="row">
        <h1>{title}</h1>
      </div>
    )
  }

  excerptSummary (summary) {
    return (
      <div className="row">
        <div dangerouslySetInnerHTML={{__html: summary}} />
        </div>
    )
  }

  excerptBox (colorArray, postInfo) {
    const postPath = postInfo.title.rendered.toLowerCase().toString().replace(/\s/g,'-')
    const colorIndex = this.getRandomInt(0, (colorArray.length - 1))
    const color = colorArray.slice(colorIndex, colorIndex+1)
    
    let boxStyle = {
      backgroundColor: color[0],
      padding: '30px',
      height: '350px',
      marginBottom: '20px'
    }

    return (
    // <Link to={postPath}>
      <div key={postInfo.id}>
        <div className="col-md-3">
          <div className="col-xs-12" style={boxStyle}>
            {this.excerptTitle(postInfo.title.rendered)}
            {this.excerptSummary(postInfo.excerpt.rendered)}
          </div>
        </div>
      </div>
    // </Link>
    )
  }

  render() {
    return (
      <div className="excerpt-box">
        {this.props.posts.map((post, idx) => {
            return (
              <div key={idx}>
              {this.excerptBox(this.state.colorArray, post)}
              </div>
            )
          })
        }
      </div>
    )
  }
}