import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
//    const placeholderModificado = `${props.placeholder}`

//Destructuración
const { type = "text" } = props   


    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value) //esto es para que se actualice el input con lo que se escribe
    }

    // className={`campo campo-${type}`}> esto quiere decir que se le aplica todo a campo y a parte diferente a cada tipo
    return <div className={`campo campo-${type}`}> 
        <label>{props.titulo}</label>
        <input 
//        placeholder={placeholderModificado} 
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio} //evento    
        type={type}    //ya con esto podemos elegir el color de una paleta de colores
        />
    </div>
}

export default Campo;