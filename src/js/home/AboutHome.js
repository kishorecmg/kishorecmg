import React from 'react'
import { NavLink } from 'react-router-dom'

class AboutHome extends React.Component
{
    render()
    {
        let currentLang = this.props.displayLanguage

        return(
            <section id="Services" className="content-section text-center">
            <div className="container" id="about-home">
              <div className="block-heading about-home-heading">
                <h2>{currentLang.aboutThis}</h2>
                <p>{currentLang.aboutThisDescription}</p> 
              </div>

              <div className="row">

              <div className="col-md-2"></div>

                <div className="col-md-4">
                  <div className="service-box">
                    <div className="service-icon blue">
                      <div className="front-content">
                        <h3>{currentLang.aboutMe}</h3>
                        <p>{currentLang.aboutMeDescription}</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>{currentLang.aboutMe}</h3>
                      <p>{currentLang.aboutMeDescriptionUnder}</p>
                      <NavLink className="btn btn-primary about-home-link" role="button" to="/about">{currentLang.knowMore}</NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="service-box">
                    <div className="service-icon green">
                      <div className="front-content">
                        <h3>{currentLang.aboutWebsite}</h3>
                        <p>{currentLang.aboutWebsiteDescription}</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>{currentLang.aboutWebsite}</h3>
                      <p>{currentLang.aboutWebsiteDescriptionUnder}</p>
                      <NavLink className="btn btn-primary about-home-link" role="button" to="/about">{currentLang.knowMore}</NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-md-2"></div>

              </div>
            </div>
          </section>
        )
    }
}

export default AboutHome