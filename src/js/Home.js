import React from 'react'

import Banner from './home/Banner'
import TechUsed from './home/TechUsed'

// import image from '../img/Construction.png'

class Home extends React.Component
{   
    render()
    {
        let currentLang = this.props.currentLanguage.homepage;
        
        return(
            <div>
                <Banner displayLanguage={currentLang}/>

                <section className="why-a-website">
                    <div className="container text-center">
                        <div className="block-heading heading-why-a-website"> <h2>{currentLang.whyWebsite}</h2> </div>
                        <p className="lead details-why-a-website">{currentLang.whyWebsiteReason}</p>
                    </div>
                </section>

                <TechUsed />
            </div>
    );
  }
}

export default Home