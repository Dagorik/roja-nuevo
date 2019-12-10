import React, { Component } from 'react';
import './App.css';
import Saludo from './componets/Saludo';
import Despedida from './componets/Despedida';
import Contador from './componets/Contador';

class App extends Component {
  
  componentDidMount(){
    // console.log('componentDidMount');
  }

  componentWillMount() {
    // console.log('componentWillMount');
  }

  // Metodo que devuelve JSX (Eventualmente se convierte en HTML)
  render() {
    // console.log('Render');
    return (
      <section>
        <div>
          <h1>Hola desde e componente app</h1>  
        </div>
        <div>
          <Saludo />
          <Despedida msj="Mensaje desde App" />
          <Contador />
        </div>
      </section>
    )
  }
}

export default App;
