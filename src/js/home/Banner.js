import React from 'react'

import Timer from './Timer'

class Slider extends React.Component
{
       
    render()
    {
        return(
            <section id="Banner" className="content-section">
            <div className="container content-wrap text-center">
              <h1>{this.props.displayLanguage.welcome} </h1>
              <h3> <Timer displayLanguage={this.props.displayLanguage}/> </h3>
            </div>
          </section>
        )
    }
}

// images downloaded from pexel.com

/* https://www.pexels.com/photo/road-landscape-nature-forest-39811/

*/

export default Slider