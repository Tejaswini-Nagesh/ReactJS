import React from 'react';
import propTypes from 'prop-types';
export class Hello  extends React.Component{
    constructor(){
        super();
        this.state={count:5};
    }
    render(){
        return <div>
            <h1>Welcome {this.props.firstName} to react count={this.state.count}</h1>
            </div>
    }
};

//Hello.defaultProps = {firstName:'TOm'};
Hello.propTypes={
    firstName:function(props,propName,componentName){
        console.log(props[propName]);
        if(props[propName].length<5)
        {
            return Error('first name should be min 5  character long');
        }
    }
}