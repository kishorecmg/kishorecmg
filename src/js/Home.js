import React from 'react'
import 'flag-icon-css/css/flag-icon.css'

import Banner from './home/Banner'
import TechUsed from './home/TechUsed'
import AboutHome from './home/AboutHome'
import CounterBanner from './home/CounterBanner'
import CommentMan from './home/CommentMan'

class Home extends React.Component
{   
    render()
    {
        let currentLang = this.props.currentLanguage.homepage;
        
        return(
            <div className="entire-home">
                <Banner displayLanguage={currentLang}/>

                <section className="why-a-website">
                    <div className="container text-center">
                        <div className="block-heading heading-why-a-website"> <h2>{currentLang.whyWebsite}</h2> </div>
                        <p className="lead details-why-a-website">{currentLang.whyWebsiteReason}</p>
                    </div>
                </section>

                <TechUsed displayLanguage={currentLang}/>

                <CounterBanner  displayLanguage={currentLang}/>

                <AboutHome displayLanguage={currentLang}/>
                
                <CommentMan displayLanguage={currentLang} />
            </div>
    );
  }
}

export default Home