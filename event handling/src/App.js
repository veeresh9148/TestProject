import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 //state management
constructor(props) {
super(props);

this.state=
{data: 'data description'
}

this.updateState=this.updateState.bind(this);

};
updateState()
{

  this.setState({data:'new data created...'})
}

 //rendering
render()
{
return (
<div>
<button onClick={this.updateState}>changeState</button>
<h3>{this.state.data}</h3>
</div>

);



}







}

export default App;
