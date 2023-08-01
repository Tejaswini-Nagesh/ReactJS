import React from 'react';
export class Clock  extends React.Component{
    constructor(){
        super();
        this.state={
            currentTime:new Date().toLocaleString()
        }
    }
    render(){
        return <div>
            <h1>{this.state.currentTime}</h1>
        </div>
    }
    componentDidMount(){
        console.log('Inside componentDidMount()');
        setInterval(()=>this.setState({currentTime: new Date().toLocaleString()}),1000);
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('inside shouldcomponentupdate()');
        return true;

    }

}