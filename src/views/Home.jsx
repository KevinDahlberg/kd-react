import React from 'react'

import Header from '../components/Header'
import PostExcerpt from '../components/PostExcerpt'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = (props) => (
    <div>
        <Header />
        <div className="container">
            <About page={props.aboutPage} />
            <PostExcerpt posts={props.posts} />
            <Contact />
        </div>
    </div>
)

export default Home