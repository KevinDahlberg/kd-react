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
                <div><h1>{page.title.rendered}</h1></div>
                <div dangerouslySetInnerHTML={{__html: content}} />
            </div>
        )
    })

    return (
    <div>{displayAboutPage}</div>
    )
}

export default About;