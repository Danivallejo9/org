import { useState } from "react";
import "./Form.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/Index";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (event) => { //para que guarde los datos
        event.preventDefault()
        console.log("Se ha enviado el formulario");
        let datosAEnviar = {  //crear un objeto a partir de los datos que se están enviando
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre"
                required 
                valor={nombre} 
                actualizarValor={setNombre}/>
            <Campo 
                titulo="Puesto"  
                placeholder="Ingresar puesto" 
                required 
                valor={puesto}
                actualizarValor={setPuesto}
                />
            <Campo titulo="Foto"  
            placeholder="Ingresar enlace de foto" 
            required 
            valor={foto}
            actualizarValor={setFoto}
            />
            <ListaOpciones valor={equipo}
            actualizarEquipo={setEquipo}
            equipos={props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo
                titulo="Titulo" 
                placeholder="Ingresar titulo"
                required 
                valor={titulo} 
                actualizarValor={setTitulo}/>
            <Campo
                titulo="Color"  
                placeholder="Ingresar el color en Hex" 
                required 
                valor={color}
                actualizarValor={setColor}
                type="color"
                />
                <Boton texto="Crear Equipo"/>
        </form>        
    </section>
}

export default Formulario