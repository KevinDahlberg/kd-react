import React from 'react'

/**
 * @function About
 * @param {*} props
 * @return displays the content from the about page 
 */
function About (props) {
    const displayAboutPage = props.page.map((page, idx) => {
        const content = page.content.rendered
        return (
            <div className="row" key={idx}>
                <div className="about-title col-12"><h1>{page.title.rendered}</h1></div>
                <div className="about-content col-12" dangerouslySetInnerHTML={{__html: content}} />
            </div>
        )
    })

    return (
    <div className="about-container">    
        <div>{displayAboutPage}</div>
    </div>
    )
}

export default About;