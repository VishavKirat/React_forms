import React from 'react';
import Form from './Forms';

class App extends React.Component {
  handleInputRead = (e) =>{
    e.preventDefault()
  } 
  handleSubmitButon = (e)=>{
    e.preventDefault();
  }
  render(){
    return (
      <div className="App">
        <Form handleInputRead = {this.handleInputRead}/>
      </div>
      );
  }
}

export default (App);
