import React from 'react'
import { NavLink } from 'react-router-dom'

import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded'
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import InfoRoundedIcon from '@material-ui/icons/InfoRounded'

import NightModeSwitch from './utils/NightModeSwitch'

class Navbar extends React.Component
{
    /* replace emojis with images as soon as possible
       uses bootstrap for clean navigation bar
       template took from bootstrap website */
    
    render()
    {
        let currentLang = this.props.data.language.navbar
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
                <div className="navbar-brand" > KishoreCMG </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <NavLink className="nav-item nav-link menu-item" to="/" exact={true} > <HomeRoundedIcon /> {currentLang.home}</NavLink>
                <NavLink className="nav-item nav-link menu-item" to="/about"> <InfoRoundedIcon /> {currentLang.about}</NavLink>
                <NavLink className="nav-item nav-link menu-item" to="/contact"> <PhoneAndroidRoundedIcon /> {currentLang.contact}</NavLink>
                </ul>

                <ul className="navbar-nav ml-auto" style={{marginRight: "3%"}}>
                
                <li> <NightModeSwitch displayLanguage={currentLang} /> </li>
                        
                {/* <ul className="navbar-nav ml-auto "> */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" 
                    data-toggle="dropdown" aria-haspopup="true" 
                    aria-expanded="false"> <LanguageRoundedIcon /> {currentLang.language} </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <div className="dropdown-item navigation-language-selection" onClick={()=>this.props.data.languageSwitch('en')} > <span className="flag-icon flag-icon-gb"></span> {currentLang.english}</div>
                    <div className="dropdown-item navigation-language-selection" onClick={()=>this.props.data.languageSwitch('jp')} > <span className="flag-icon flag-icon-jp"></span> {currentLang.japanese}</div>
                </div>   {/*dropdown menu div ends*/}
                </li>    {/* dropdown li ends */}
                </ul>  {/* dropdown ul ends */}
            </div>   {/*  entire dropdown div ends */}
            </nav>
            
            )
        }
}

export default Navbar


/*
Old one
<nav className="nav navbar navbar-inverse">
<div className="collapse navbar-collapse">
<ul className="nav navbar-nav">
<li><a href="/">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/contact">Contact</a></li>
</ul>
</div>
</nav>

<div className="dropdown-item" onClick={()=> this.props.data.languageSwitch('jp')} > <span role="img" aria-label="japan"> 🇯🇵 </span> {currentLang.japanese}</div>
*/