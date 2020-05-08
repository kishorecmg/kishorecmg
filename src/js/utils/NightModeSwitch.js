import React from 'react'

class NightModeSwitch extends React.Component
{
    changeTheme(event)
    {
        var qing = event.target.checked;
        console.log(qing)
        if(qing)
        {
            document.documentElement.style.setProperty("--main-navbar", "#333");
            document.documentElement.style.setProperty("--main-background-color", "#555");
            document.documentElement.style.setProperty("--main-text-color", "white");
        }
        else
        {
            document.documentElement.style.setProperty("--main-navbar", "#0091ea");
            document.documentElement.style.setProperty("--main-background-color", "#fff");
            document.documentElement.style.setProperty("--main-text-color", "black");        
        }

    }
    
    render()
    {
        return(
            <div className="navbar-nav ml-auto nightmode" style={{marginRight: "-300px"}}>
                <div className="nav-item menu-item">
                    <p className="nightmode-label">Night Mode</p>
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