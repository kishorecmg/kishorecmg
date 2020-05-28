import React from 'react'
import { Link } from 'react-router-dom'

class About extends React.Component
{
    render()
    {
        let currentLang = this.props.currentLanguage.about

        return(
            <div className="container-fluid" id="about-mainone" >
                <h1 className="about-heading">{currentLang.heading}</h1>
                <p className="about-para">{currentLang.fillText}</p>

                <div className="row about-div">
                    <div className="col-6 about-side-div">
                        <Link to="/about/myself" className="about-link">
                            <h3 className="about-inside-head">{currentLang.aboutMe}</h3>
                        </Link>
                    </div>
                    <div className="col-6 about-side-div">
                        <Link to="/about/webpage" className="about-link">
                            <h3 className="about-inside-head">{currentLang.aboutWebpage}</h3>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default About

/*

Photo from https://unsplash.com/photos/yCAAeuCL0mw 
location: Rothenburg ob der tauber, Germany

*/

/*
 Found this one on stackover flow
 I think the best way to use react-router-dom Link in a MenuItem (and other MaterialUI component such as buttons) is to pass the Link in the "component" prop

<Menu>
   <MenuItem component={Link} to={'/first'}>Team 1</MenuItem>
   <MenuItem component={Link} to={'/second'}>Team 2</MenuItem>
</Menu>
you need to pass the route path in the 'to' prop of the "MenuItem" (which will be passed down to the Link component). In this way you don't need to add any style as it will use the MenuItem style

*/
