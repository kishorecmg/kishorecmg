import React from 'react'

import img1 from "../../img/home/htmlcssjavascript.png"
import img2 from "../../img/home/bootstrap.png"
import img3 from "../../img/home/reactjs.png"

class TechUsed extends React.Component
{
    render()
    {
        return(
           <section className="tech-used">
             <div className="container">
               <h2 className="tech-used-head">Technologies used to make this website</h2>
               <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src={img1} alt="mainTech"/>
                        <div className="card-body">
                            <h5 className="card-title">HTML, CSS, and Javascript</h5>
                            <p className="card-text">What page doesn't ?</p>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={img3} alt="reactjs"/>
                        <div className="card-body">
                            <h5 className="card-title">React JS</h5>
                            <p className="card-text">React JS is a Javascript library, and this one makes implementing Javascript a lot easier.</p>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={img2} alt="bootstrap"/>
                        <div className="card-body">
                            <h5 className="card-title">Bootstrap 4</h5>
                            <p className="card-text">If React JS makes Javascript implementation easy, Bootstrap makes CSS implementation easy. One just need to add classes and they are good to go.</p>
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