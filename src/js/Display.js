import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home' 
import Contact from './Contact'
import Footer from './Footer'
import About from './About'

import AboutMe from './about/AboutMe'
import AboutPage from './about/AboutPage'

import ErrorPage from './utils/ErrorPage'
import Dialogbox from './utils/Dialogbox'
import LoadingScreen from './utils/LoadingScreen'

import tamil from '../json/tamil.json'
import english from '../json/english.json'
import japanese from '../json/japanese.json'


class Display extends React.Component
{
	/* language is the language information, this component dispatches this language information to 
		all other components. changedLang is the requested language to be displayed from the onClick event.
		isBackdrop is set false to hide loading screen. If set true, loading screen would go infinitely
		dialog is set false, that the Dialogbox component stays unmounted, is set true, it opens the dialogbox*/
		
	constructor()
	{
		super()
		this.state = {language: english, changedLang: "null", isBackdrop: false, dialog: false}		
	}
	
	/* languageSwitch is triggered when language button is clicked, and this function triggers
	the dialog box by using ref keyword. */
	
	languageSwitch(changedLanguage)
	{
		if(this.state.language.lang !== changedLanguage)
		{
			this.setState({changedLang: changedLanguage})
			this.setState({dialog: true})
		}
	}	
	
	/* agreedOrNot function is triggered when the user clicks any key in the dialog box
	setTimeOut is set to emulate loading times, but the languages load almost instantly
	dialog must be set to false, else it might cause problems*/

	agreedOrNot(result)
	{
		if(this.state.language.lang !== this.state.changedLang)
		{
			if(result)
			{
				this.setState({isBackdrop: true, dialog: false})

				setTimeout(()=> {this.setState({isBackdrop: false})}, 2500)
				
				if(this.state.changedLang === "ta")
				{
					setTimeout(()=> {this.setState({language: tamil})}, 2000)   
				}
				else if(this.state.changedLang === "en")
				{
					setTimeout(()=> {this.setState({language: english})}, 2000)   
				}
				else if(this.state.changedLang === "jp")
				{
					setTimeout(()=> {this.setState({language: japanese})}, 2000)   
				}
			}
			else
			{
				this.setState({dialog: false})
			}
		}

		else if(result === false)
		{
			this.setState({dialog: false})
		}
		
		return result
	}
	
	render()
	{
		let backdrop, dialogbox
		
		if(this.state.isBackdrop)
		{
			backdrop = <LoadingScreen />
		}
		else
		{
			backdrop = <p/>
		}

		if(this.state.dialog)
		{
			dialogbox = <Dialogbox data={{language: this.state.language, 
				agreedOrNot: this.agreedOrNot.bind(this)}} />
		}
		
		/* Switch component have to be always surround only Route components, else ErrorPage component is 
			displayed in all pages */

		return(
			<BrowserRouter>
				<div id="page-container">
					<Navbar id ="top" data={{language: this.state.language, 
						languageSwitch: this.languageSwitch.bind(this)}} />

					{backdrop}

					{dialogbox}

					<Switch>
						<Route exact path="/" render={(props) => <Home {...props} currentLanguage={this.state.language} />} />
						<Route exact path="/about" render={(props) => <About {...props} currentLanguage={this.state.language} />} />
						<Route exact path="/contact" render={(props) => <Contact {...props} currentLanguage={this.state.language} />} />

						<Route path="/about/myself" render={(props) => <AboutMe {...props} currentLanguage={this.state.language} />} />
						<Route path="/about/webpage" render={(props) => <AboutPage {...props} currentLanguage={this.state.language} />} />
						
						{/* This one is ErrorPage, displayed when different URL is typed manually */}
						<Route path="" render={(props) => <ErrorPage {...props} currentLanguage={this.state.language} />} />
					</Switch>
				</div>

				<Footer />

			</BrowserRouter>
		)
	}
}

export default Display


// Old code ****
// if(this.state.language.lang === "en" && changedLanguage === "jp")
// {
	// 	this.refs.child.handleClickOpen()
	// 	console.log('**' + this.agreedOrNot)
	// 	if(this.agreedOrNot)
	// 	{
		// 		this.setState({language: japanese})
		// 	}
		// }
		// else if(this.state.language.lang === "jp" && changedLanguage === "en")
		// {
			// 	this.refs.child.handleClickOpen()
			// 	if(this.agreedOrNot)
			// 	{
				// 		this.setState({language: english})
				// 	}
				// }
				// if(changedLanguage === "en")
				// 	this.setState({language: english})
				// else if(changedLanguage === "jp")
				// 	this.setState({language: japanese})
/* <Dialogbox onRef={ref => (this.child = ref)} /> 
<Dialogbox ref="child" /> */
/* <Dialogbox ref="child" data={{language: this.state.language, 
		agreedOrNot: this.agreedOrNot.bind(this)}} /> */