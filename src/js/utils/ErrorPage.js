import React from 'react'

class ErrorPage extends React.Component
{
    render()
    {
        return(
            <div>
                <div className="errorpage-image">
                    <h1 className="errorpage-text">Error 404</h1>
                </div>

                <h5 className="text-center">You have strayed from the path. Seek retribution by clicking Home.</h5>
            </div>
        )
    }
}

export default ErrorPage

/* Image downloaded from https://www.pexels.com/photo/yellow-and-black-pedestrian-lane-1162643/*/