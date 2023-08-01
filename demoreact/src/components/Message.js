import React, { Component } from 'react'

class Message extends Component{
    constructor()   {
        super()
        this.state={
            message:'welcome visitor'
        }// state is a object that privately maintain in component
    }
    changeMessage(){
        this.setState({
            message:'thank u for subscribing'
        })
    }// we can change the state within component
    render(){
        return(
        <>
    <h1>{this.state.message}</h1> 
        <button onClick={()=>this.changeMessage()}>subscribe</button>
        </>
        )
    }
}
export default Message
