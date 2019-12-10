import React, { Component } from 'react';

class Saludo extends Component{

    constructor(props){
        super(props);
        this.state = {
            mensajin: 'El mensaje de saludo desde el componente Saludo'
        }
    }

    render(){
        // console.log(this.state);
        return (
            <h2>{this.state.mensajin}</h2>
        )
    }
}

export default Saludo;