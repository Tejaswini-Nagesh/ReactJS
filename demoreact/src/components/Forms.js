import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserName:'',
         comment:''
      }
    }
    
    handleUsernameChange=(event)=>{
        this.setState({
            UserName:event.target.value,
        })

    }
    handleCommentChange=(event)=>{
        this.setState({
            comment:event.target.value,
        })

    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.UserName} ${this.state.comment} ${this.state.topic}`)
    }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <div>
            <label>UserName</label>
            <input type="text" value={this.state.UserName}  onChange={this.handleUsernameChange}/>
        </div>
        <br />
        <div>
            <label>Comment</label>
            <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.value} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="react">Vue</option>
            </select>
            <br />
            <button type="submit">Submit</button>
        </div>
    </form>
    )
  }
}

export default Forms
