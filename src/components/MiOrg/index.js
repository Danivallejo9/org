import { useState } from "react"; 
import "./MiOrg.css";

const MiOrg = (props) => {

    console.log(props);
/*    const manejarClick = () => {
        console.log("Mostrar/ocultar");
    }**/

    return <section className="orgSection">
        <h3 className="titulo">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>

    </section>
}

export default MiOrg;