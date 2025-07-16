import React from "react";
import ListaTarjeta from "../componentes/lista";
import saludo from "../componentes/saludo";
import boston from "../img/boston.jpg"
import persa from '../img/persa.jpg'
import Boton from "../componentes/button"

export default class Principal extends React.Component{
    state={

            data:[
            ]
        }

        async componentDidMount(){
            await this.fetchPersonajes()
        }

        fetchPersonajes=async()=>{
            let res = await fetch('http://localhost:8000/api/Personajes')
            let data = await res.json()
            console.log(data)
            this.setState({
                data
            })
        }
    
    render(){
        return(
        
        <div>
            
            <saludo
            name="Oswaldo"
            />
            <ListaTarjeta
            personajes={this.state.data}
            />

            <Boton/>
            
            </div>
)

        }

}