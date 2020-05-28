import React from 'react'

class NightModeSwitch extends React.Component
{
    changeTheme(event)
    {
        var qing = event.target.checked;
        
        if(qing) // Night-mode on
        {
            document.documentElement.style.setProperty("--main-navbar", "#333");
            document.documentElement.style.setProperty("--main-background-color", "rgba(85, 85, 85, 0.90)");
            document.documentElement.style.setProperty("--main-background-light-grey", "rgba(95, 95, 95, 0.50)");
            document.documentElement.style.setProperty("--main-text-color", "white");
            document.documentElement.style.setProperty("--main-background-non-transparent", "rgb(85, 85, 85)");
        }
        else // Night-mode off
        {
            document.documentElement.style.setProperty("--main-navbar", "#0091ea");
            document.documentElement.style.setProperty("--main-background-color", "rgba(255, 255, 255, 0.90)");
            document.documentElement.style.setProperty("--main-background-light-grey", "rgba(250, 250, 250, 0.50)");
            document.documentElement.style.setProperty("--main-text-color", "black");
            document.documentElement.style.setProperty("--main-background-non-transparent", "rgb(250, 250, 250)");        
        }

    }
    
    render()
    {
        return(
            <div id="nightmode-switch" className="navbar-nav ml-auto nightmode">
                <div className="nav-item menu-item">
                    <p className="nightmode-label">{this.props.displayLanguage.nightmode}</p>
                <label className="switch">
                    <input type="checkbox" onChange={this.changeTheme} />
                    <span className="slider round"></span>
                </label>
                </div>
            </div>
        )
    }
}

export default NightModeSwitch

/*  to get a value ~
var lang = window .getComputedStyle(document.documentElement) .getPropertyValue("--main-navbar"); */