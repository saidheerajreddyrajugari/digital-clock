import React,{Component} from 'react'
export default class DigitalClock extends Component{
    constructor(props){
        super(props)
        this.state={
            date:new Date().toDateString(),
            time:new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {
        setInterval(() => {
          this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
      }
    render(){
       return(
            <div id="mdiv">
           <h2 id="dh2">{this.state.date}</h2>   
           <h1 id="dh1">{this.state.time.slice(0,8)}</h1>
           <h1 id="dh12">{this.state.time.slice(8)}</h1>
           </div>
        )
    }
}