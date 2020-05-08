import React from 'react'

import Timer from '../js/home/Timer'
import image from '../img/Construction.png'

class Home extends React.Component
{   
    render()
    {
        let currentLang = this.props.currentLanguage.homepage;
        
        return(
            <div className="container">
                <header>
                    <h1 className="jumbotron text-center" style={{color: "black"}}>{currentLang.message}</h1>
                </header>

                <h1>{this.props.title}</h1>

                <Timer displayLanguage={currentLang} />

                <img src={image} alt="construction" style={{margin: "20px auto", width: "90%"}} className="img-circle" />
            </div>
    );
  }
}

export default Home