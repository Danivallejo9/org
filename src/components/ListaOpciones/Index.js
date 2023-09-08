import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value) //para que muestre en pantalla el cambio
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}> //para mostrar como un placeholder
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;