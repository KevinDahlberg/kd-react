import React from 'react'

import Header from '../components/Header'
import PostExcerpt from '../components/PostExcerpt'
import About from '../components/About'

const Home = (props) => (
    <div>
        <Header />
        <div className="container">
            <About page={props.aboutPage} />
            <PostExcerpt posts={props.posts} />
        </div>
    </div>
)

export default Home