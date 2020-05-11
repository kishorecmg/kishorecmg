import React from 'react'

class Counter extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {intervalId: 0, currentCount: this.props.start}
        this.timer = this.timer.bind(this)

        console.log(this.props.speed)
    }

    componentDidMount() 
    {
        let speed = Math.round(10000/(this.props.end - this.props.start))
        
        var intervalId = setInterval(this.timer, speed);

        this.setState({intervalId: intervalId});
     }
     
     componentWillUnmount() 
     {
        clearInterval(this.state.intervalId);
     }
     
     timer() 
     {
        this.setState({ currentCount: this.state.currentCount + 1 });
        if(this.state.currentCount >= this.props.end)
            clearInterval(this.state.intervalId)
     }
     
     render() 
     {
         return (
           <section>
            {this.state.currentCount}
           </section>
         );
     }
}

export default Counter