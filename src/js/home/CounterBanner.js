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
        let today = new Date()

        // difference is obtained in milliseconds, so dividing by 86400000

        let difference = Math.round(Math.abs(today - startDate)/86400000) 

        let hours = difference * 5
        let coffee = difference * 2
        let timeThinking = difference * 16
        
        return(
            <section id="mu-counter">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-counter-area">
                        <h2 className="counter-text">Some nice statistics</h2>

							<div class="mu-counter-block">
								<div class="row">

									<div class="col-md-4 col-sm-6">
										<div class="mu-single-counter">
											<span class="counter-icon"> <CodeIcon style={{ fontSize: 40 }}/></span>
											<div class="mu-single-counter-content">
												<div class="counter-value"><Counter start={0} end={hours} /></div>
												<h5 class="mu-counter-name">Hours of Programming</h5>
											</div>
										</div>
									</div>

									<div class="col-md-4 col-sm-6">
										<div class="mu-single-counter">
                                        <span class="counter-icon"> <LocalCafeRoundedIcon style={{ fontSize: 40 }}/></span>
											<div class="mu-single-counter-content">
												<div class="counter-value"><Counter start={0} end={coffee}/></div>
												<h5 class="mu-counter-name">Cups of Coffee</h5>
											</div>
										</div>
									</div>

									<div class="col-md-4 col-sm-6">
										<div class="mu-single-counter">
                                        <span class="counter-icon"> <QueryBuilderIcon style={{ fontSize: 40 }}/></span>
											<div class="mu-single-counter-content">
												<div class="counter-value"><Counter start={0} end={timeThinking}/></div>
												<h5 class="mu-counter-name">Hours of Thinking</h5>
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