import React from 'react'

class Contact extends React.Component
{
    render()
    {
        let currentLang = this.props.currentLanguage.contact
        return(
            <div className="container">
                <h1>{currentLang.heading}</h1>
                <p>{currentLang.fillText} </p>
            </div>
        )
    }
}

export default Contact