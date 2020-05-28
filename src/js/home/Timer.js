import React from 'react'

class Timer extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {date: new Date()}
		this.interval = 0
	}

	componentDidMount()
	{
		this.interval = setInterval(()=> this.clock(), 1000);
	}

	componentWillUnmount()
	{
		clearInterval(this.interval)
	}

	clock()
	{
		this.setState({date: new Date()})
	}

	greet(props)
	{
		let hout = this.state.date.getHours()
		let currentlang = this.props.displayLanguage
		let greeting = ""

		if(hout >= 8 && hout <= 11)
			greeting = currentlang.goodMorning
		else if (hout >=12 && hout <= 16)
			greeting = currentlang.goodAfternoon
		else if (hout >=17 && hout <= 19)
			greeting = currentlang.goodEvening
		else if (hout >=20 && hout <= 23)
			greeting = currentlang.goodNight
		else if (hout >=0 && hout <= 4)
			greeting = currentlang.midnight
		else if (hout >=5 && hout <= 7)
			greeting = currentlang.prettyQuick

		return greeting
	}

	render()
	{
		let time = this.state.date.toTimeString().split(' ')

		let currentLang = this.props.displayLanguage

		return(
				<div>
					<p>{this.greet()}! {currentLang.time} {time[0]}</p>
				</div>
			)
	}
}

export default Timer