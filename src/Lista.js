import React, { Component } from 'react';
import './App.css';
import Content from './Content.js';

class Lista extends Component {
constructor(props) {
    super(props)
    this.state = { event: 0 }
     this.handleMostrarClick = this.handleMostrarClick.bind(this);
     this.handleOcultarClick = this.handleOcultarClick.bind(this);
  }
  handleMostrarClick(e) {
     this.setState({ event: 1 })
  }
  handleOcultarClick(e) {
     this.setState({ event: 0})
  }
  
  render() {
    var age = 20;
 if (this.state.event > 0) {
    return (
      <div className="App">
      <h1> Mi componente!</h1>
       {
            this.props.listado.map((user) => {

                  return <Content key={ user.id }
                                  name={ user.login }
                                  age={ user.id }
                                   />
            })
          }

        <Content name = "Jonathan Campo" age={age} />
        <button id="add" onClick={this.handleOcultarClick}>Ocultar</button>
      </div>
    )}else {
      return <div>
       <h1> Hola soy un componente!</h1>
       <p className="text-center">Mostar Propiedades?</p>
       <button id="add" onClick={this.handleMostrarClick}>Si</button>
       </div>
    }
    
  }
  
}

export default Lista;