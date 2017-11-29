import React from 'react'

import Header from '../components/Header'
import PostExcerpt from '../components/PostExcerpt'

const Home = (props) => (
    <div>
        <Header />
        <PostExcerpt posts={props.posts} />
    </div>
)

export default Home