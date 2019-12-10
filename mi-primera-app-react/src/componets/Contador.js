import React, {Component} from 'react';

class Contador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            word: '',
        }
    }

    onClickHandle = (event) => {
        const newNumer =  event.target.id === 'suma' 
            ? this.state.number+1 
            : this.state.number-1
        this.setState({
            number: newNumer
        });
    }

    onChangeInput = (e) => {
        console.log('On change');
        console.log(e.target.value);
        this.setState({
            word: e.target.value
        });
    }

    alertClick = () => {
        alert(`Palabra: ${this.state.word}`)
    }

    render(){
        return (
            <div className="Contador">
                <h1>El contador</h1>
                <p>{this.state.number}</p>
                <button id="suma" onClick={this.onClickHandle}>Sumar</button>
                <button id="resta" onClick={this.onClickHandle}>Restar</button>
                <br/>
                <input onChange={this.onChangeInput}></input>
                <button onClick={this.alertClick}>Leer input</button>
            </div>
        )
    }
}

export default Contador;