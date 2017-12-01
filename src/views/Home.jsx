import React from 'react'

import Header from '../components/Header'
import PostExcerpt from '../components/PostExcerpt'

const Home = (props) => (
    <div>
        <Header />
        <div className="container">
            <PostExcerpt posts={props.posts} />
        </div>
    </div>
)

export default Home