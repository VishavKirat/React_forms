import React from 'react';
import Form from './Forms';

class App extends React.Component {
  state = {}
  handleSubmitButon = (e)=>{
    e.preventDefault();
    console.log(this.state)
  }
  handleInput = (e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <Form handleInput={this.handleInput} handleSubmitButon = {this.handleSubmitButon}/>
      </div>
      );
  }
}

export default (App);
