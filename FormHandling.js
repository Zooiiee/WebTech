//Form.js

import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    };
  }


  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }


  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value
    });
  }


  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    });
  }


  handleSubmit = (event) => {
    alert(`Username: ${this.state.username} \nComments: ${this.state.comments} \nTopic: ${this.state.topic}`);
    event.preventDefault();
  }


  render() {
    return (
 <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        </div><br></br>
        <div>
          <label>Comments: </label>
          <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <br></br>
        <div>
          <label>Topic: </label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    );
  }
}


export default Form;



//App.js

import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';


class App extends Component{
    render(){
    return(
        <div className="con">
            <h1><i>Form Handling</i></h1>
           <Form/>
        </div>
    );
}}


export default App;
