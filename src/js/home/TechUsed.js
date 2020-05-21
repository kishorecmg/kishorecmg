import React from 'react'

import img1 from "../../img/home/htmlcssjavascript.png"
import img2 from "../../img/home/bootstrap.png"
import img3 from "../../img/home/reactjs.png"
import img4 from "../../img/home/Node-JS-01.png"

class TechUsed extends React.Component
{
    render()
    {
        return(
           <section className="tech-used">
             <div className="tech-used-container">
               <h2 className="tech-used-head">{this.props.displayLanguage.technologiesUsed}</h2>
               <div className="card-deck tech-used-deck">
                    <div className="card">
                        <img className="card-img-top" src={img1} alt="mainTech"/>
                        <div className="card-body">
                            <h5 className="card-title">HTML, CSS, and Javascript</h5>
                            <p className="card-text">{this.props.displayLanguage.htmlcssjsDescription}</p>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={img3} alt="reactjs"/>
                        <div className="card-body">
                            <h5 className="card-title">React JS</h5>
                            <p className="card-text">{this.props.displayLanguage.reactjsDescription}</p>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={img2} alt="bootstrap"/>
                        <div className="card-body">
                            <h5 className="card-title">Bootstrap 4</h5>
                            <p className="card-text">{this.props.displayLanguage.bootstrapDescription}</p>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={img4} alt="nodejs"/>
                        <div className="card-body">
                            <h5 className="card-title">Node JS</h5>
                            <p className="card-text">{this.props.displayLanguage.nodejsDescription}</p>
                        </div>
                    </div>
                    </div>
              </div>
           </section>

        )
    }
}

export default TechUsed


/* image downloaded from https://www.pexels.com/photo/aerial-photography-of-green-trees-1481581/ */ 