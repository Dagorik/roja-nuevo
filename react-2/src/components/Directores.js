import React, { Component } from 'react';
import Director from './Director';
import axios from 'axios';

class Directores extends Component {

    constructor(props){
        super(props);
        this.state = {
            cardDirectores: [<Director />,<Director />,<Director />,<Director />],
            directores: [],
        }
    }

    componentDidMount(){
        // Consumir el enpoint
        const URL = 'https://peaceful-shelf-30983.herokuapp.com/all/directors'
        axios.get(URL)
            .then((result) => {
                const respuesta = result.data;
                const arregloDeDirectores = respuesta.map(director => <Director name={director.nombre}/>);
                // [<Director />,<Director />,<Director />]
                this.setState({
                    directores: arregloDeDirectores
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    render(){
        return (
            <section className="row">
                {this.state.directores}
            </section>
        );
    }
}

export default Directores;