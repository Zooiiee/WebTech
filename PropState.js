//CODE: Greeting Application with props

//Greet.js


import React from 'react';


// function Greet (props){
//      return <h1><i>Hello {props.name} {props.Surname}</i></h1>
// }


const Greet = props => {
    console.log(props)
    return <h1><i>Hello {props.name} {props.Surname}</i></h1>
}


export default Greet;



//App.js

import React from 'react';
import './App.css';
import Greet from './Components/Greet';


function App(){
    return(
        <div className="container">
            <Greet name="Zoya" Surname="Jetham"></Greet>
            <Greet name="Priya" Surname="Verma"></Greet>
            <Greet name="Iffah" Surname="Sheikh"></Greet>
        </div>
    );
}


export default App;




//CODE:  Message Application with State

//Message.js

import React, { Component } from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state = {
            Message: 'Welcome Visitor!!!'
        }
    }
    changeMessage(){
        this.setState(
            {
                Message: 'Thanks for Subscribing!!'
            }
        )
    }
    render(){
        return(
            <div>
            <h1>
                <i>{this.state.Message}</i>
            </h1>
            <button onClick={this.changeMessage.bind(this)}>Subscribe</button>
            </div>

        )
    }
}


export default Message;



//CODE: Counter Application with State

//Counter.js

import React, { Component } from 'react';


class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            Count: 0
        }
    }
    updateClick(){
        this.setState(
            {
                Count: this.state.Count +1
            }
        )
    }
    render(){
        return(
            <div>
            <h1>Counter Application</h1>
            <h1>
                <i>{this.state.Count}</i>
            </h1>
            <button onClick={this.updateClick.bind(this)}>Counter</button>
            </div>
        )
    }
}

export default Counter;


//App.js

import React, { Component } from 'react';
import './App.css';
import Counter from './Components/Counter';


class App extends Component{
    render(){
    return(
        <div className="container">
           <Counter/>
        </div>
    );}}
export default App;


