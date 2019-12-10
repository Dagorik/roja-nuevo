import React, { Component } from 'react';

class Despedida extends Component{

    constructor(props){
        super(props);
        // console.log(props.msj);
    }

    render(){
        return (
            <h2>{this.props.msj}</h2>
        )
    }
}

export default Despedida;