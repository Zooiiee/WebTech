//CODE: Basic Calculator

//AddMultiply.js

import React, { Component } from 'react'


export class AddMultiply extends Component {
    constructor(props)
    {
        super(props);
        this.state ={Num1:0,Num2:0};
    }


    Add = () => {
        var n1= parseFloat(this.state.Num1);
        var n2= parseFloat(this.state.Num2);
        var ans = n1+n2;
        alert("Addition of "+n1+" & "+n2+" : "+ans);
    }


    Sub = () => {
        var n1= parseFloat(this.state.Num1);
        var n2= parseFloat(this.state.Num2);
        var ans = n1-n2;
        alert("Subtration of "+n1+" & "+n2+" : "+ans);
    }
   


    Multiply = () => {
        const n1 = parseFloat(this.state.Num1);
        const n2 = parseFloat(this.state.Num2);
        const ans = n1 * n2;
        alert("Multiplication of "+n1+" & "+n2+" : "+ans);
    }


  render() {
    return (
      <div>
        <div>
            <label>Number 1: </label>
            <input type="number" value={this.state.Num1} onChange={(e) => this.setState({Num1 :e.target.value})}/>
        </div>
        <br></br>
        <div>
            <label>Number 2: </label>
            <input type="number" value={this.state.Num2} onChange={(e) => this.setState({Num2 :e.target.value})}/>
        </div>
        <br></br>
        <div>
            <button onClick={this.Add}>Add</button>
            <button onClick={this.Sub}>Subtract</button>
            <button onClick={this.Multiply}>Multiply</button>
        </div>
       
      </div>
    )
  }
}


export default AddMultiply




//App.js

import React, { Component } from 'react';
import './App.css';
import AddMultiply from './Components/AddMultiply';


class App extends Component{
    render(){
    return(
        <div className="con">
            <h1><i>Basic Calculator</i></h1>
           <AddMultiply/>
        </div>
    );
}
}


export default App;







