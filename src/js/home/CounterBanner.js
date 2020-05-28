import React from 'react'

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import CodeIcon from '@material-ui/icons/Code'
import LocalCafeRoundedIcon from '@material-ui/icons/LocalCafeRounded'

import Counter from './Counter'

class CounterBanner extends React.Component
{
    
    render()
    {
        let startDate = new Date("2020/5/2")
        let today = new Date("2020/5/28")

        // difference is obtained in milliseconds, so dividing by 86400000 to get value in days

        let difference = Math.round(Math.abs(today - startDate)/86400000) 

        let hours = difference * 5
        let coffee = difference * 2
        let timeThinking = difference * 16
        
        return(
            <section id="mu-counter">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="mu-counter-area">
                        <h2 className="counter-text">{this.props.displayLanguage.statisticsHeading}</h2>

							<div className="mu-counter-block">
								<div className="row">

									<div className="col-md-4 col-sm-6">
										<div className="mu-single-counter">
											<span className="counter-icon"> <CodeIcon style={{ fontSize: 40 }}/></span>
											<div className="mu-single-counter-content">
												<div className="counter-value"><Counter start={0} end={hours} /></div>
												<h5 className="mu-counter-name">{this.props.displayLanguage.programming}</h5>
											</div>
										</div>
									</div>

									<div className="col-md-4 col-sm-6">
										<div className="mu-single-counter">
                                        <span className="counter-icon"> <LocalCafeRoundedIcon style={{ fontSize: 40 }}/></span>
											<div className="mu-single-counter-content">
												<div className="counter-value"><Counter start={0} end={coffee}/></div>
												<h5 className="mu-counter-name">{this.props.displayLanguage.coffee}</h5>
											</div>
										</div>
									</div>

									<div className="col-md-4 col-sm-6">
										<div className="mu-single-counter">
                                        <span className="counter-icon"> <QueryBuilderIcon style={{ fontSize: 40 }}/></span>
											<div className="mu-single-counter-content">
												<div className="counter-value"><Counter start={0} end={timeThinking}/></div>
												<h5 className="mu-counter-name">{this.props.displayLanguage.thinking}</h5>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        )
    }
}

export default CounterBanner

 // <div className="counter-banner container">
            //     <h2>Some nice stats</h2>
            //     <div className="row">
            //         <div className="col-md-4 counter-element">
            //             <p>Number of Hours spent in programming</p>
            //             <span><Counter start={0} end={hours} /></span>
            //         </div>
            //         <div className="col-md-4 counter-element">
            //             <p>Number of cups of coffee consumed</p>
            //             <span><Counter start={0} end={coffee}/></span>
            //         </div>
            //         <div className="col-md-4 counter-element">
            //             <p>Number of Hours spent in thinking what to do</p>
            //             <span><Counter start={0} end={timeThinking}/></span>
            //         </div>
            //     </div>

            // </div>