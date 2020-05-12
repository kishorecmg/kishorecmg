import React from 'react'

class ErrorPage extends React.Component
{
    render()
    {
        return(
            <div>
                <div className="errorpage-image">
                    <h1 className="errorpage-text">{this.props.currentLanguage.errorpage.error404}</h1>
                </div>

                <h5 className="text-center">{this.props.currentLanguage.errorpage.clickhome}</h5>
            </div>
        )
    }
}

export default ErrorPage

/* Image downloaded from https://www.pexels.com/photo/yellow-and-black-pedestrian-lane-1162643/*/