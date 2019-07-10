import React from 'react';
import Form from './Forms';
import {connect} from 'react-redux'

class App extends React.Component {
  state = {}
  handleSubmitButon = (e)=>{
    e.preventDefault();
    this.props.addingDetails(this.state);
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
        {this.props.name && <div className="details container col center">
          <p >Name: {this.props.name}</p>
          <p >Phone: {this.props.phone}</p>
        </div>}
      </div>
      );
  }
}
const mapStateToProps = (state)=>{
  return (
    {
      name: state.name,
      phone: state.phone
    }
  )
}
const mapDispatchToProps = (dispatch)=>(
  {
    addingDetails :(details)=> dispatch({type:'ADDINGDETAILS',details})
  }
)
export default connect(mapStateToProps,mapDispatchToProps)(App);
