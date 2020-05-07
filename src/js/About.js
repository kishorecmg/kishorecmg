import React from 'react'

class About extends React.Component
{
    render()
    {
        let currentLang = this.props.currentLanguage.about
        return(
            <div className="container" >
                <h1>{currentLang.heading}</h1>
                <p>{currentLang.fillText}</p>
            </div>
        )
    }
}

export default About