import React, { Component } from 'react';
import './card.css'

class Director extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="card fix-card col-3">
                <img src="https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75" className="card-img-top" alt="..."/>
                <div className="card-body">
                <p className="card-text">{this.props.name}</p>
                </div>
            </div>
        );
    }
}

export default Director;