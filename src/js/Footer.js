import React from 'react'

import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import GitHub from '@material-ui/icons/GitHub'
import Instagram from '@material-ui/icons/Instagram'
import Pinterest from '@material-ui/icons/Pinterest'

class Footer extends React.Component
{
  
  render()
    {
        
      return(
            <footer  className="footer text-center">
              
              <div className="container">
                <ul className="list-inline">
                  <li className="list-inline-item">
                  <a href="https://https://twitter.com/KishoreCMG"><Twitter className="social-link rounded-circle text-white mr-3" /></a>
                  </li>
                  <li className="list-inline-item">
                  <a href="https://www.instagram.com/_kishorecmg_/"><Instagram className="social-link rounded-circle text-white mr-3" /></a>
                  </li>
                  <li className="list-inline-item">
                  <a href="https://github.com/kishorecmg"><GitHub className="social-link rounded-circle text-white mr-3"/></a>
                  </li>
                  <li className="list-inline-item">
                  <a href="https://pinterest.com/kishorecmg/"><Pinterest className="social-link rounded-circle text-white mr-3"/></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/kishoreprabhu.s"><Facebook className="social-link rounded-circle text-white mr-3" /></a>
                  </li>
                </ul>
            
                <p className="footer-text">Designed by KishoreCMG</p>
              </div>
            </footer>
        )
    }
}

export default Footer