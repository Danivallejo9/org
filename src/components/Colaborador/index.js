import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

//línea 9: si no se pone el around function se eliminarían toodos los colaboradores. Quiere decir, que no se va a llamar la función a menos que el usuario le de click  
const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav } = props.datos
    const {colorPrimario, eliminarColaborador, like} = props
    return <div className="colaborador">
    <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} /> 
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)} /> }
        </div>
    </div>
}

export default Colaborador